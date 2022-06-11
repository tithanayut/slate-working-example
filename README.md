This is a simple working Rich Text example of [Slate](https://github.com/ianstormtaylor/slate).

For most basic use cases, looking at `pages/index.tsx` should suffice.

```tsx
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
```
