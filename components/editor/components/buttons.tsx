import { useSlate } from "slate-react";
import { Button, Icon } from "./ui";
import { isBlockActive, toggleBlock } from "../utils/block";
import { isMarkActive, toggleMark } from "../utils/mark";
import { TEXT_ALIGN_TYPES } from "../constants";

interface ButtonProps {
  format: string;
  icon: string;
}

export const BlockButton: React.FC<ButtonProps> = ({ format, icon }) => {
  const editor = useSlate();

  return (
    <Button
      active={isBlockActive(editor, format, TEXT_ALIGN_TYPES.includes(format) ? "align" : "type")}
      onMouseDown={(event: MouseEvent) => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  );
};

export const MarkButton: React.FC<ButtonProps> = ({ format, icon }) => {
  const editor = useSlate();

  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={(event: MouseEvent) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  );
};
