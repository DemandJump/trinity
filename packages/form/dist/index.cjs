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
  DJForm: () => DJForm_default,
  DJTextField: () => DJTextField_default
});
module.exports = __toCommonJS(src_exports);

// src/DJForm.tsx
var React = __toESM(require("react"), 1);
var import_prop_types = __toESM(require("prop-types"), 1);
var import_formik = require("formik");
var uuid = __toESM(require("uuid"), 1);
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
  }, (props) => /* @__PURE__ */ React.createElement(import_formik.Form, {
    id: formId,
    ...rest
  }, children));
};
DJForm.propTypes = {
  children: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.node]),
  enableReinitialize: import_prop_types.default.bool,
  id: import_prop_types.default.string,
  initialErrors: import_prop_types.default.object,
  initialStatus: import_prop_types.default.any,
  initialTouched: import_prop_types.default.object,
  initialValues: import_prop_types.default.object.isRequired,
  innerRef: import_prop_types.default.any,
  onReset: import_prop_types.default.func,
  onSubmit: import_prop_types.default.func,
  validate: import_prop_types.default.func,
  validationSchema: import_prop_types.default.object
};
DJForm.defaultProps = {
  onSubmit: () => {
  }
};
var DJForm_default = DJForm;

// src/DJTextField.tsx
var import_prop_types2 = __toESM(require("prop-types"), 1);
var import_styles2 = require("@mui/material/styles/index.js");
var import_material = require("@mui/material");
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
var import_react = require("@emotion/react");
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
  const [{ onChange: useFieldOnChange, ...field }, metadata, helpers] = (0, import_formik2.useField)(name);
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
  const rootStyle = (0, import_react.css)({
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
  return /* @__PURE__ */ (0, import_react.jsx)(import_styles2.ThemeProvider, {
    theme: src_default
  }, /* @__PURE__ */ (0, import_react.jsx)(import_material.InputLabel, {
    style: disabled ? disabledInputLabelStyle : inputLabelStyle,
    shrink: true,
    htmlFor: htmlId
  }, labelText), /* @__PURE__ */ (0, import_react.jsx)(import_material.TextField, {
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
  className: import_prop_types2.default.string,
  name: import_prop_types2.default.string.isRequired,
  onChange: import_prop_types2.default.func,
  required: import_prop_types2.default.bool
};
DJTextField.defaultProps = {
  required: false
};
var DJTextField_default = DJTextField;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DJForm,
  DJTextField
});
