import { ChangeEventHandler } from "react";

export interface InputProps {
  type?: "text"|"password"|"email";
  id?: string;
  label?: string;
  error?: boolean;
  message?: string;
  success?: boolean;
  disabled?: boolean;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
