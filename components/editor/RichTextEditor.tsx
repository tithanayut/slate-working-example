import React, { useCallback, useMemo } from "react";
import isHotkey from "is-hotkey";
import { createEditor, Descendant } from "slate";
import { Editable, withReact, Slate, ReactEditor } from "slate-react";
import { withHistory } from "slate-history";

import { Toolbar } from "./components/ui";
import { MarkButton, BlockButton } from "./components/buttons";
import { Element, ElementProps, Leaf, LeafProps } from "./components/renderers";
import { HOTKEYS, blankValue } from "./constants";
import { toggleMark } from "./utils/mark";

interface RichTextEditorProps {
  initialValue?: Descendant[];
  onContentChange: (newContent: Descendant[]) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ initialValue, onContentChange }) => {
  const renderElement = useCallback((props: ElementProps) => <Element {...props} />, []);
  const renderLeaf = useCallback((props: LeafProps) => <Leaf {...props} />, []);
  const editor = useMemo(() => withHistory(withReact(createEditor() as ReactEditor)), []);

  return (
    <div className="slate">
      <Slate
        editor={editor}
        value={initialValue ?? blankValue}
        onChange={(value) => {
          onContentChange(value);
        }}
      >
        <Toolbar>
          <MarkButton format="bold" icon="format_bold" />
          <MarkButton format="italic" icon="format_italic" />
          <MarkButton format="underline" icon="format_underlined" />
          <MarkButton format="code" icon="code" />
          <BlockButton format="heading-one" icon="looks_one" />
          <BlockButton format="heading-two" icon="looks_two" />
          <BlockButton format="block-quote" icon="format_quote" />
          <BlockButton format="numbered-list" icon="format_list_numbered" />
          <BlockButton format="bulleted-list" icon="format_list_bulleted" />
          <BlockButton format="left" icon="format_align_left" />
          <BlockButton format="center" icon="format_align_center" />
          <BlockButton format="right" icon="format_align_right" />
          <BlockButton format="justify" icon="format_align_justify" />
        </Toolbar>
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          spellCheck
          autoFocus
          onKeyDown={(event) => {
            for (const hotkey in HOTKEYS) {
              if (isHotkey(hotkey, event)) {
                event.preventDefault();
                const mark = HOTKEYS[hotkey];
                toggleMark(editor, mark);
              }
            }
          }}
        />
      </Slate>
    </div>
  );
};

export default RichTextEditor;
