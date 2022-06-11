import { Editor, Transforms, Element as SlateElement, BaseElement, Node } from "slate";
import { LIST_TYPES, TEXT_ALIGN_TYPES } from "../constants";

export const toggleBlock = (editor: Editor, format: string) => {
  const isActive = isBlockActive(editor, format, TEXT_ALIGN_TYPES.includes(format) ? "align" : "type");
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: (n) => {
      const m = n as Node & { type: string };
      return (
        !Editor.isEditor(m) &&
        SlateElement.isElement(m) &&
        LIST_TYPES.includes(m.type) &&
        !TEXT_ALIGN_TYPES.includes(format)
      );
    },
    split: true,
  });
  let newProperties: Partial<{ type?: string; align?: string } & SlateElement>;
  if (TEXT_ALIGN_TYPES.includes(format)) {
    newProperties = {
      align: isActive ? undefined : format,
    };
  } else {
    newProperties = {
      type: isActive ? "paragraph" : isList ? "list-item" : format,
    };
  }
  Transforms.setNodes<SlateElement>(editor, newProperties);

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

export const isBlockActive = (editor: Editor, format: string, blockType = "type") => {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) => {
        const m = n as Node & Record<string, any>;
        return !Editor.isEditor(m) && SlateElement.isElement(m) && m[blockType] === format;
      },
    })
  );

  return !!match;
};
