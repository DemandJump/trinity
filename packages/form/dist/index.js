// src/DJForm.tsx
import * as React from "react";
import PropTypes from "prop-types";
import { Formik, Form as FForm } from "formik";
import * as uuid from "uuid";
var DJForm = ({
  initialValues,
  enableReinitialize,
  onSubmit,
  initialStatus,
  initialErrors,
  initialTouched,
  onReset,
  validationSchema,
  validate,
  id,
  innerRef,
  children,
  ...rest
}) => {
  const formId = id || uuid.v4();
  return /* @__PURE__ */ React.createElement(Formik, {
    initialValues,
    enableReinitialize,
    onSubmit,
    onReset,
    initialStatus,
    initialErrors,
    initialTouched,
    validationSchema,
    validate,
    innerRef
  }, (props) => /* @__PURE__ */ React.createElement(FForm, {
    id: formId,
    ...rest
  }, children));
};
DJForm.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  enableReinitialize: PropTypes.bool,
  id: PropTypes.string,
  initialErrors: PropTypes.object,
  initialStatus: PropTypes.any,
  initialTouched: PropTypes.object,
  initialValues: PropTypes.object.isRequired,
  innerRef: PropTypes.any,
  onReset: PropTypes.func,
  onSubmit: PropTypes.func,
  validate: PropTypes.func,
  validationSchema: PropTypes.object
};
DJForm.defaultProps = {
  onSubmit: () => {
  }
};
var DJForm_default = DJForm;

// src/DJTextField.tsx
import PropTypes2 from "prop-types";
import { ThemeProvider } from "@mui/material/styles/index.js";
import { TextField as MUITextField, InputLabel } from "@mui/material";
import { useField } from "formik";

// src/theme/src/index.ts
import { createTheme } from "@mui/material/styles/index.js";
import "@fontsource/source-sans-pro";
var defaultTheme = createTheme();
var theme = createTheme({
  palette: {
    primary: {
      main: "#008CCE"
    },
    secondary: {
      main: "#2ABBFF"
    },
    error: {
      main: "#B00020"
    },
    metalgrey: defaultTheme.palette.augmentColor({
      color: {
        main: "#373F50"
      }
    }),
    disabled: defaultTheme.palette.augmentColor({
      color: {
        main: "#909BB3"
      }
    })
  },
  typography: {
    fontFamily: [
      "Source Sans Pro"
    ].join(",")
  }
});
var src_default = theme;

// src/DJTextField.tsx
import { css, jsx } from "@emotion/react";
var DJTextField = ({
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
  ...rest
}) => {
  const [{ onChange: useFieldOnChange, ...field }, metadata, helpers] = useField(name);
  const htmlId = id;
  const disabledHelperTextStyle = {
    color: "#9E9E9E"
  };
  const helperTextStyle = {
    color: metadata.error ? src_default.palette.error.main : "#373F50"
  };
  const disabledInputLabelStyle = {
    color: "#9E9E9E",
    position: "absolute",
    padding: "0 0 0 16px"
  };
  const inputLabelStyle = {
    color: metadata.error ? src_default.palette.error.main : "#373F50",
    position: "absolute",
    padding: "0 0 0 16px",
    lineHeight: "20.11px"
  };
  const disabledPlaceholderStyle = {
    color: "#9E9E9E",
    padding: "0px 5px"
  };
  const placeholderStyle = {
    color: "#56627C",
    padding: "0px 5px"
  };
  const rootStyle = css({
    marginTop: "8px",
    fontSize: "16px",
    fontWeight: 400,
    width: "auto",
    padding: "8px 0px",
    borderColor: "pink",
    boxSizing: "border-box",
    color: metadata.error ? src_default.palette.error.main : "#56627C",
    height: "48px",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#373F50"
      }
    }
  });
  return /* @__PURE__ */ jsx(ThemeProvider, {
    theme: src_default
  }, /* @__PURE__ */ jsx(InputLabel, {
    style: disabled ? disabledInputLabelStyle : inputLabelStyle,
    shrink: true,
    htmlFor: htmlId
  }, labelText), /* @__PURE__ */ jsx(MUITextField, {
    disabled,
    css: rootStyle,
    id: htmlId,
    variant: "outlined",
    ...rest,
    InputLabelProps: {
      shrink: false,
      style: disabled ? disabledPlaceholderStyle : placeholderStyle
    },
    label: !metadata.touched && !field.value && label,
    className,
    name,
    required,
    value: field.value,
    error: !!metadata.error,
    helperText: metadata.error || helpMessage,
    InputProps: {
      style: {
        color: metadata.error ? src_default.palette.error.main : "#56627C",
        borderColor: "pink !important"
      }
    },
    inputProps: {
      style: {
        padding: "8px 16px",
        borderColor: "pink !important"
      }
    },
    FormHelperTextProps: {
      style: disabled ? disabledHelperTextStyle : helperTextStyle
    },
    onBlur: () => {
      if (!metadata.touched) {
        helpers.setTouched(true);
      }
    },
    onChange: (e) => {
      if (!metadata.touched) {
        helpers.setTouched(true);
      }
      useFieldOnChange(e);
      if (propsOnChange) {
        propsOnChange(e);
      }
    }
  }));
};
DJTextField.propTypes = {
  className: PropTypes2.string,
  name: PropTypes2.string.isRequired,
  onChange: PropTypes2.func,
  required: PropTypes2.bool
};
DJTextField.defaultProps = {
  required: false
};
var DJTextField_default = DJTextField;
export {
  DJForm_default as DJForm,
  DJTextField_default as DJTextField
};
