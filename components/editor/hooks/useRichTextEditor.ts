import { useState } from "react";
import { Descendant } from "slate";

const useRichTextEditor = (initialValue: Descendant[]) => {
  const [content, setContent] = useState<Descendant[]>(initialValue);

  const onContentChange = (newContent: Descendant[]) => {
    setContent(newContent);
  };

  return {
    content,
    onContentChange,
  };
};

export default useRichTextEditor;
