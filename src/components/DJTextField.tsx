/** @jsxRuntime classic */
/** @jsx jsx */
import React, { CSSProperties } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@mui/material/styles/index.js";
import {
  TextField as MUITextField,
  InputLabel,
  InputAdornment,
} from "@mui/material";
import { useField } from "formik";
import theme from "./theme";
import { DJTextFieldD } from "./types";
import { css, jsx } from "@emotion/react";
const DJTextField = ({
  className,
  onChange: propsOnChange,
  labelText,
  name,
  required,
  label,
  helpMessage,
  formikProps,
  disabled,
  id,
  iconBefore,
  type,
  placeholder,
  ...rest
}: DJTextFieldD) => {
  const [{ onChange: useFieldOnChange, ...field }, metadata, helpers] =
    useField(name);

  const htmlId = id;
  const disabledHelperTextStyle: CSSProperties = {
    color: "#9E9E9E",
  };
  const helperTextStyle: CSSProperties = {
    color: metadata.error ? theme.palette.error.main : "#373F50",
  };
  const disabledInputLabelStyle: CSSProperties = {
    color: "#9E9E9E",
    position: "absolute",
    padding: "0 0 0 16px",
  };
  const inputLabelStyle: CSSProperties = {
    color: metadata.error ? theme.palette.error.main : "#373F50",
    position: "absolute",
    padding: "0 0 0 16px",
    lineHeight: "20.11px",
  };
  const disabledPlaceholderStyle: CSSProperties = {
    color: "#9E9E9E",
  };
  const placeholderStyle: CSSProperties = {
    color: "#56627C",
    marginLeft: iconBefore ? "24px" : "0px",
  };
  const rootStyle = css({
    marginTop: "8px",
    fontSize: "16px",
    fontWeight: 400,
    width: "100%",
    padding: "8px 0px",
    borderColor: "pink",
    boxSizing: "border-box",
    color: metadata.error ? theme.palette.error.main : "#56627C",
    height: "48px",
    "& .MuiOutlinedInput-root": {
      // - The Input-root, inside the TextField-root
      "& fieldset": {
        // - The <fieldset> inside the Input-root
        borderColor: "#373F50", // - Set the Input border. info: https://stackoverflow.com/questions/52911169/how-to-change-the-border-color-of-mui-textfield
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      {label && labelText &&
        <InputLabel
          style={disabled ? disabledInputLabelStyle : inputLabelStyle}
          shrink
          htmlFor={htmlId}
          required={false}
        >
          {labelText}
        </InputLabel>
      }
      <MUITextField
        type={type}
        disabled={disabled}
        css={rootStyle}
        id={htmlId}
        variant="outlined"
        {...rest}
        InputLabelProps={{
          shrink: false,
          style: disabled ? disabledPlaceholderStyle : placeholderStyle,
          required: false,
        }}
        label={!metadata.touched && !field.value && label}
        placeholder={placeholder}
        className={className}
        name={name}
        required={required}
        value={field.value}
        error={!!metadata.error}
        helperText={metadata.error || helpMessage}
        InputProps={{
          style: {
            color: metadata.error ? theme.palette.error.main : "#56627C",
            borderColor: "pink !important",
          },
          startAdornment: iconBefore && (
            <InputAdornment position="start">{iconBefore}</InputAdornment>
          ),
        }}
        inputProps={{
          style: {
            padding: iconBefore ? "8px 0px" : "8px 16px",
            borderColor: "pink !important",
          },
        }}
        FormHelperTextProps={{
          style: disabled ? disabledHelperTextStyle : helperTextStyle,
        }}
        onBlur={() => {
          if (!metadata.touched) {
            helpers.setTouched(true);
          }
        }}
        onChange={(e) => {
          if (!metadata.touched) {
            helpers.setTouched(true);
          }
          useFieldOnChange(e);
          if (propsOnChange) {
            propsOnChange(e);
          }
        }}
      />
    </ThemeProvider>
  );
};

DJTextField.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};

DJTextField.defaultProps = {
  required: false,
};

export default DJTextField;
