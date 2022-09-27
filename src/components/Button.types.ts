import { MouseEventHandler } from "react";
import { SxProps } from '@mui/system';
export interface ButtonProps {
  text?: string;
  variant?: 'contained'
  | 'outlined'
  | 'text';
  color?: 'inherit'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning';
  sx?: SxProps;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}
