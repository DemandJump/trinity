import React from "react";
import { ButtonProps } from "./Button.types";
import { styled } from "@mui/material/styles";
import { Button as MuiButton } from "@mui/material";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";

const StyledButton = styled(MuiButton)<ButtonProps>(({ theme, color }) => ({
  boxShadow: "none",
  fontFamily: "'Source Sans Pro'",
  fontStyle: "normal",
  fontWeight: "600",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  letterSpacing: "0.0125em",
  textTransform: "capitalize",
  "&:hover": {
    boxShadow: "0px 4px 8px rgba(55, 63, 80, 0.25)",
  },
  "& .MuiButton-sizeSmall": {
    fontSize: "14px",
    lineHeight: "18px",
    height: "32px",
  },
  "& .MuiButton-sizeMedium": {
    fontSize: "16px",
    lineHeight: "20px",
    height: "40px",
  },
  "& .MuiButton-sizeLarge": {
    fontSize: "20px",
    lineHeight: "25px",
    height: "48px",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    gap: "10px",
    borderRadius: "3px",
  },
  "&:active": {
    "&.MuiButton-containedPrimary": {
      backgroundColor: "#2ABBFF",
    },
    "&.MuiButton-containedSecondary": {
      backgroundColor: "#2ABBFF",
    },
  },
}));

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
      <StyledButton
        disableRipple
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
      </StyledButton>
    </ThemeProvider>
  );
};

export default Button;
