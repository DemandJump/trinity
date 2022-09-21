import { MouseEventHandler } from "react";
export interface ButtonProps {
  text?: "button" | "submit";
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: string;
}
