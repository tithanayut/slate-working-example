import type { NextPage } from "next";
import RichTextEditor from "../components/editor";
import useRichTextEditor from "../components/editor/hooks/useRichTextEditor";
import { blankValue } from "../components/editor/constants";

const Home: NextPage = () => {
  const { content, onContentChange } = useRichTextEditor(blankValue);

  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1 style={{ textAlign: "center" }}>Slate Working Example</h1>
      <RichTextEditor initialValue={blankValue} onContentChange={onContentChange} />
      <pre>{JSON.stringify(content, null, 2)}</pre>
    </main>
  );
};

export default Home;
