This is a simple working Rich Text example of [Slate](https://github.com/ianstormtaylor/slate).

For most basic use cases, looking at `pages/index.tsx` should suffice.

```tsx
import { RichTextEditor, useRichTextEditor, blankValue } from "../components/editor";

const MyRichTextEditor = () => {
  const { content, onContentChange } = useRichTextEditor(blankValue);

  return <RichTextEditor initialValue={blankValue} onContentChange={onContentChange} />;
};
```
