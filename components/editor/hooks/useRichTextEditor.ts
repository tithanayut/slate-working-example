import { useState } from "react";
import { Content } from "../types";

const useRichTextEditor = () => {
  const [content, setContentState] = useState<Content>();

  const setContent = (newContent: Content) => {
    setContentState(newContent);
  };

  return {
    content,
    setContent,
  };
};

export default useRichTextEditor;
