import React from "react";
import { cx, css } from "@emotion/css";

interface BaseProps {
  className?: string;
  [key: string]: unknown;
}

interface ButtonProps extends BaseProps {
  active: boolean;
  reversed?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ className, active, reversed, ...props }) => (
  <span
    {...props}
    className={cx(
      className,
      css`
        cursor: pointer;
        color: ${reversed ? (active ? "white" : "#aaa") : active ? "black" : "#ccc"};
      `
    )}
  />
);

export const Icon: React.FC<BaseProps> = ({ className, ...props }) => (
  <span
    {...props}
    className={cx(
      "material-icons",
      className,
      css`
        font-size: 18px;
        vertical-align: text-bottom;
      `
    )}
  />
);

export const Menu: React.FC<BaseProps> = ({ className, ...props }) => (
  <div
    {...props}
    className={cx(
      className,
      css`
        & > * {
          display: inline-block;
        }
        & > * + * {
          margin-left: 15px;
        }
      `
    )}
  />
);

export const Toolbar: React.FC<BaseProps> = ({ className, ...props }) => (
  <Menu
    {...props}
    className={cx(
      className,
      css`
        position: relative;
        padding: 1px 18px 17px;
        margin: 0 -20px;
        border-bottom: 2px solid #eee;
        margin-bottom: 20px;
      `
    )}
  />
);
