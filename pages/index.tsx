import type { NextPage } from "next";
import RichTextEditor from "../components/editor";
import useRichTextEditor from "../components/editor/hooks/useRichTextEditor";

const Home: NextPage = () => {
  const { content, setContent } = useRichTextEditor();

  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1 style={{ textAlign: "center" }}>Slate Working Example</h1>
      <RichTextEditor onContentChange={setContent} />
      <pre>{JSON.stringify(content, null, 2)}</pre>
    </main>
  );
};

export default Home;
