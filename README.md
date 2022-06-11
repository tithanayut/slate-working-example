This is a simple working Rich Text example of [Slate](https://github.com/ianstormtaylor/slate).

For most basic use cases, looking at `pages/index.tsx` should suffice.

```tsx
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
```

Work to enhance Typescript types could be done further.
