import React from "react";
import { ButtonProps } from "./Button.types";
import { Button as MuiButton } from "@mui/material";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";

const Button: React.FC<ButtonProps> = ({
  variant = "outlined",
  text,
  disabled,
  onClick,
  color,
  size,
  sx,
  type = "button",
  ...props
}) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiButton
        variant={variant}
        color={color}
        type={type}
        disabled={disabled}
        onClick={onClick}
        size={size}
        sx={sx}
        {...props}
      >
        {text}
      </MuiButton>
    </ThemeProvider>
  );
};

export default Button;
