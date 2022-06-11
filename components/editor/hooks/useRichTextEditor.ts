import { useState } from "react";
import { Content } from "../types";
import { initialValue } from "../constants";

const useRichTextEditor = () => {
  const [content, setContentState] = useState<Content>(initialValue);

  const setContent = (newContent: Content) => {
    setContentState(newContent);
  };

  return {
    content,
    setContent,
  };
};

export default useRichTextEditor;
