"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  DJTextField: () => DJTextField_default,
  Form: () => Form_default
});
module.exports = __toCommonJS(src_exports);

// src/Form.tsx
var React = __toESM(require("react"));
var import_prop_types = __toESM(require("prop-types"));
var import_material = require("@mui/material");
var import_formik = require("formik");
var useFormikFocusFirstInvalidField = (id, focusInvalidField, invalidInputSelectors) => {
  const formik = (0, import_formik.useFormikContext)();
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
  return /* @__PURE__ */ React.createElement(import_material.FormControl, {
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
  return /* @__PURE__ */ React.createElement(import_formik.Formik, {
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
    tag: import_formik.Form,
    id: formId,
    focusProps,
    ...rest,
    formikProps: props
  }, typeof children === "function" ? children(props) : children)));
};
Form.propTypes = {
  children: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.node]),
  enableReinitialize: import_prop_types.default.bool,
  focusInvalidField: import_prop_types.default.bool,
  id: import_prop_types.default.string,
  initialErrors: import_prop_types.default.object,
  initialStatus: import_prop_types.default.any,
  initialTouched: import_prop_types.default.object,
  initialValues: import_prop_types.default.object.isRequired,
  innerRef: import_prop_types.default.any,
  invalidInputSelectors: import_prop_types.default.string,
  onReset: import_prop_types.default.func,
  onSubmit: import_prop_types.default.func,
  validate: import_prop_types.default.func,
  validationSchema: import_prop_types.default.object
};
Form.defaultProps = {
  focusInvalidField: true,
  invalidInputSelectors: 'input[aria-invalid="true"], div.is-invalid input:first-of-type:not([hidden]):not([style*="display:none"]):not([style*="display: none"])',
  onSubmit: () => {
  }
};
FocusableForm.propTypes = {
  children: import_prop_types.default.node,
  focusProps: import_prop_types.default.array
};
var Form_default = Form;

// src/DJTextField.tsx
var import_react = __toESM(require("react"));
var import_prop_types2 = __toESM(require("prop-types"));
var import_styles2 = require("@mui/material/styles/index.js");
var import_material2 = require("@mui/material");
var import_formik2 = require("formik");

// src/theme/src/index.ts
var import_styles = require("@mui/material/styles/index.js");
var import_source_sans_pro = require("@fontsource/source-sans-pro");
var defaultTheme = (0, import_styles.createTheme)();
var theme = (0, import_styles.createTheme)({
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
var DJTextField = ({ tag: Tag, className, onChange: propsOnChange, labelText, validate, name, required, label, helpMessage, formikProps, ...rest }) => {
  const [{ onChange: useFieldOnChange, ...field }, metadata, helpers] = (0, import_formik2.useField)(
    name
  );
  const htmlId = rest == null ? void 0 : rest.id;
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
  return /* @__PURE__ */ import_react.default.createElement(import_styles2.ThemeProvider, {
    theme: src_default
  }, /* @__PURE__ */ import_react.default.createElement(import_material2.InputLabel, {
    style: rest.disabled ? disabledInputLabelStyle : inputLabelStyle,
    shrink: true,
    htmlFor: htmlId
  }, labelText), /* @__PURE__ */ import_react.default.createElement(import_material2.TextField, {
    style: rootStyle,
    id: htmlId,
    variant: "outlined",
    ...rest,
    InputLabelProps: {
      shrink: false,
      style: rest.disabled ? disabledPlaceholderStyle : placeholderStyle
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
      style: rest.disabled ? disabledHelperTextStyle : helperTextStyle
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
  className: import_prop_types2.default.string,
  name: import_prop_types2.default.string.isRequired,
  onChange: import_prop_types2.default.func,
  required: import_prop_types2.default.bool,
  validate: import_prop_types2.default.func
};
DJTextField.defaultProps = {
  required: false
};
var DJTextField_default = DJTextField;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DJTextField,
  Form
});
