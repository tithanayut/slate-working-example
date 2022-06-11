import type { NextPage } from "next";
import RichTextEditor from "../components/editor";
import useRichTextEditor from "../components/editor/hooks/useRichTextEditor";

const Home: NextPage = () => {
  const { content, setContent } = useRichTextEditor();

  return (
    <main style={{ display: "flex", justifyContent: "center" }}>
      <RichTextEditor onContentChange={setContent} />
    </main>
  );
};

export default Home;
