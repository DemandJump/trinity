// src/Form.tsx
import * as React from "react";
import PropTypes from "prop-types";
import { FormControl as MUIForm } from "@mui/material";
import { Formik, Form as FForm, useFormikContext } from "formik";
var useFormikFocusFirstInvalidField = (id, focusInvalidField, invalidInputSelectors) => {
  const formik = useFormikContext();
  const [submitCount, setSubmitCount] = React.useState(formik.submitCount);
  React.useEffect(() => {
    if (focusInvalidField && !formik.isValid && formik.submitCount > submitCount) {
      const form = document.getElementById(id);
      const firstInvalidInput = form == null ? void 0 : form.querySelector(invalidInputSelectors);
      firstInvalidInput == null ? void 0 : firstInvalidInput.focus();
      setSubmitCount(formik.submitCount);
    }
  }, [id, focusInvalidField, formik.isValid, formik.submitCount, invalidInputSelectors, submitCount, formik.errors]);
};
var FocusableForm = ({ children, focusProps, ...rest }) => {
  useFormikFocusFirstInvalidField(...focusProps);
  return /* @__PURE__ */ React.createElement(MUIForm, {
    ...rest
  }, children);
};
var Form = ({
  initialValues,
  enableReinitialize,
  onSubmit,
  initialStatus,
  initialErrors,
  initialTouched,
  onReset,
  validationSchema,
  validate,
  focusInvalidField,
  id,
  innerRef,
  invalidInputSelectors,
  children,
  ...rest
}) => {
  const formId = id;
  const focusProps = [id = formId, focusInvalidField, invalidInputSelectors];
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
  }, (props) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(FocusableForm, {
    "data-testid": "form-container",
    tag: FForm,
    id: formId,
    focusProps,
    ...rest,
    formikProps: props
  }, typeof children === "function" ? children(props) : children)));
};
Form.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  enableReinitialize: PropTypes.bool,
  focusInvalidField: PropTypes.bool,
  id: PropTypes.string,
  initialErrors: PropTypes.object,
  initialStatus: PropTypes.any,
  initialTouched: PropTypes.object,
  initialValues: PropTypes.object.isRequired,
  innerRef: PropTypes.any,
  invalidInputSelectors: PropTypes.string,
  onReset: PropTypes.func,
  onSubmit: PropTypes.func,
  validate: PropTypes.func,
  validationSchema: PropTypes.object
};
Form.defaultProps = {
  focusInvalidField: true,
  invalidInputSelectors: 'input[aria-invalid="true"], div.is-invalid input:first-of-type:not([hidden]):not([style*="display:none"]):not([style*="display: none"])',
  onSubmit: () => {
  }
};
FocusableForm.propTypes = {
  children: PropTypes.node,
  focusProps: PropTypes.array
};
var Form_default = Form;

// src/DJTextField.tsx
import React2 from "react";
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
    color: metadata.error ? src_default.palette.error.main : src_default.palette.metalgrey.main
  };
  const disabledInputLabelStyle = {
    color: "#9E9E9E"
  };
  const inputLabelStyle = {
    color: metadata.error ? src_default.palette.error.main : src_default.palette.metalgrey.main
  };
  const disabledPlaceholderStyle = {
    color: "#9E9E9E",
    padding: "0px 5px"
  };
  const placeholderStyle = {
    color: "#56627C",
    padding: "0px 5px"
  };
  const rootStyle = {
    marginTop: "8px",
    fontSize: "16px",
    fontWeight: 400,
    width: "auto",
    padding: "8px 6px",
    "&:focus": {
      borderColor: src_default.palette.primary.main
    },
    boxSizing: "border-box",
    color: metadata.error ? src_default.palette.error.main : "#56627C",
    height: "48px"
  };
  return /* @__PURE__ */ React2.createElement(ThemeProvider, {
    theme: src_default
  }, /* @__PURE__ */ React2.createElement(InputLabel, {
    style: disabled ? disabledInputLabelStyle : inputLabelStyle,
    shrink: true,
    htmlFor: htmlId
  }, labelText), /* @__PURE__ */ React2.createElement(MUITextField, {
    style: rootStyle,
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
        color: metadata.error ? src_default.palette.error.main : "#56627C"
      }
    },
    inputProps: {
      style: {
        padding: "8px 16px"
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
  DJTextField_default as DJTextField,
  Form_default as Form
};
