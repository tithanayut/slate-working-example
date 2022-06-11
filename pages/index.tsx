import type { NextPage } from "next";
import RichTextEditor from "../components/editor";
import { blankValue } from "../components/editor/constants";
import useRichTextEditor from "../components/editor/hooks/useRichTextEditor";

const Home: NextPage = () => {
  const { content, onContentChange } = useRichTextEditor(blankValue);

  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1 style={{ textAlign: "center" }}>Slate Working Example</h1>
      <RichTextEditor initialValue={content} onContentChange={onContentChange} />
      <pre>{JSON.stringify(content, null, 2)}</pre>
    </main>
  );
};

export default Home;
