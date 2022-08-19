var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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

// ../../node_modules/tsup/assets/esm_shims.js
var init_esm_shims = __esm({
  "../../node_modules/tsup/assets/esm_shims.js"() {
  }
});

// ../../node_modules/uuid/dist/rng.js
var require_rng = __commonJS({
  "../../node_modules/uuid/dist/rng.js"(exports) {
    "use strict";
    init_esm_shims();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = rng;
    var _crypto = _interopRequireDefault(__require("crypto"));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var rnds8Pool = new Uint8Array(256);
    var poolPtr = rnds8Pool.length;
    function rng() {
      if (poolPtr > rnds8Pool.length - 16) {
        _crypto.default.randomFillSync(rnds8Pool);
        poolPtr = 0;
      }
      return rnds8Pool.slice(poolPtr, poolPtr += 16);
    }
  }
});

// ../../node_modules/uuid/dist/regex.js
var require_regex = __commonJS({
  "../../node_modules/uuid/dist/regex.js"(exports) {
    "use strict";
    init_esm_shims();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    exports.default = _default;
  }
});

// ../../node_modules/uuid/dist/validate.js
var require_validate = __commonJS({
  "../../node_modules/uuid/dist/validate.js"(exports) {
    "use strict";
    init_esm_shims();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _regex = _interopRequireDefault(require_regex());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function validate(uuid2) {
      return typeof uuid2 === "string" && _regex.default.test(uuid2);
    }
    var _default = validate;
    exports.default = _default;
  }
});

// ../../node_modules/uuid/dist/stringify.js
var require_stringify = __commonJS({
  "../../node_modules/uuid/dist/stringify.js"(exports) {
    "use strict";
    init_esm_shims();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _validate = _interopRequireDefault(require_validate());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var byteToHex = [];
    for (let i = 0; i < 256; ++i) {
      byteToHex.push((i + 256).toString(16).substr(1));
    }
    function stringify(arr, offset = 0) {
      const uuid2 = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
      if (!(0, _validate.default)(uuid2)) {
        throw TypeError("Stringified UUID is invalid");
      }
      return uuid2;
    }
    var _default = stringify;
    exports.default = _default;
  }
});

// ../../node_modules/uuid/dist/v1.js
var require_v1 = __commonJS({
  "../../node_modules/uuid/dist/v1.js"(exports) {
    "use strict";
    init_esm_shims();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rng = _interopRequireDefault(require_rng());
    var _stringify = _interopRequireDefault(require_stringify());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var _nodeId;
    var _clockseq;
    var _lastMSecs = 0;
    var _lastNSecs = 0;
    function v1(options, buf, offset) {
      let i = buf && offset || 0;
      const b = buf || new Array(16);
      options = options || {};
      let node = options.node || _nodeId;
      let clockseq = options.clockseq !== void 0 ? options.clockseq : _clockseq;
      if (node == null || clockseq == null) {
        const seedBytes = options.random || (options.rng || _rng.default)();
        if (node == null) {
          node = _nodeId = [seedBytes[0] | 1, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
        }
        if (clockseq == null) {
          clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
        }
      }
      let msecs = options.msecs !== void 0 ? options.msecs : Date.now();
      let nsecs = options.nsecs !== void 0 ? options.nsecs : _lastNSecs + 1;
      const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
      if (dt < 0 && options.clockseq === void 0) {
        clockseq = clockseq + 1 & 16383;
      }
      if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === void 0) {
        nsecs = 0;
      }
      if (nsecs >= 1e4) {
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
      }
      _lastMSecs = msecs;
      _lastNSecs = nsecs;
      _clockseq = clockseq;
      msecs += 122192928e5;
      const tl = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
      b[i++] = tl >>> 24 & 255;
      b[i++] = tl >>> 16 & 255;
      b[i++] = tl >>> 8 & 255;
      b[i++] = tl & 255;
      const tmh = msecs / 4294967296 * 1e4 & 268435455;
      b[i++] = tmh >>> 8 & 255;
      b[i++] = tmh & 255;
      b[i++] = tmh >>> 24 & 15 | 16;
      b[i++] = tmh >>> 16 & 255;
      b[i++] = clockseq >>> 8 | 128;
      b[i++] = clockseq & 255;
      for (let n = 0; n < 6; ++n) {
        b[i + n] = node[n];
      }
      return buf || (0, _stringify.default)(b);
    }
    var _default = v1;
    exports.default = _default;
  }
});

// ../../node_modules/uuid/dist/parse.js
var require_parse = __commonJS({
  "../../node_modules/uuid/dist/parse.js"(exports) {
    "use strict";
    init_esm_shims();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _validate = _interopRequireDefault(require_validate());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function parse(uuid2) {
      if (!(0, _validate.default)(uuid2)) {
        throw TypeError("Invalid UUID");
      }
      let v;
      const arr = new Uint8Array(16);
      arr[0] = (v = parseInt(uuid2.slice(0, 8), 16)) >>> 24;
      arr[1] = v >>> 16 & 255;
      arr[2] = v >>> 8 & 255;
      arr[3] = v & 255;
      arr[4] = (v = parseInt(uuid2.slice(9, 13), 16)) >>> 8;
      arr[5] = v & 255;
      arr[6] = (v = parseInt(uuid2.slice(14, 18), 16)) >>> 8;
      arr[7] = v & 255;
      arr[8] = (v = parseInt(uuid2.slice(19, 23), 16)) >>> 8;
      arr[9] = v & 255;
      arr[10] = (v = parseInt(uuid2.slice(24, 36), 16)) / 1099511627776 & 255;
      arr[11] = v / 4294967296 & 255;
      arr[12] = v >>> 24 & 255;
      arr[13] = v >>> 16 & 255;
      arr[14] = v >>> 8 & 255;
      arr[15] = v & 255;
      return arr;
    }
    var _default = parse;
    exports.default = _default;
  }
});

// ../../node_modules/uuid/dist/v35.js
var require_v35 = __commonJS({
  "../../node_modules/uuid/dist/v35.js"(exports) {
    "use strict";
    init_esm_shims();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _default;
    exports.URL = exports.DNS = void 0;
    var _stringify = _interopRequireDefault(require_stringify());
    var _parse = _interopRequireDefault(require_parse());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function stringToBytes(str) {
      str = unescape(encodeURIComponent(str));
      const bytes = [];
      for (let i = 0; i < str.length; ++i) {
        bytes.push(str.charCodeAt(i));
      }
      return bytes;
    }
    var DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
    exports.DNS = DNS;
    var URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
    exports.URL = URL;
    function _default(name, version, hashfunc) {
      function generateUUID(value, namespace, buf, offset) {
        if (typeof value === "string") {
          value = stringToBytes(value);
        }
        if (typeof namespace === "string") {
          namespace = (0, _parse.default)(namespace);
        }
        if (namespace.length !== 16) {
          throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        }
        let bytes = new Uint8Array(16 + value.length);
        bytes.set(namespace);
        bytes.set(value, namespace.length);
        bytes = hashfunc(bytes);
        bytes[6] = bytes[6] & 15 | version;
        bytes[8] = bytes[8] & 63 | 128;
        if (buf) {
          offset = offset || 0;
          for (let i = 0; i < 16; ++i) {
            buf[offset + i] = bytes[i];
          }
          return buf;
        }
        return (0, _stringify.default)(bytes);
      }
      try {
        generateUUID.name = name;
      } catch (err) {
      }
      generateUUID.DNS = DNS;
      generateUUID.URL = URL;
      return generateUUID;
    }
  }
});

// ../../node_modules/uuid/dist/md5.js
var require_md5 = __commonJS({
  "../../node_modules/uuid/dist/md5.js"(exports) {
    "use strict";
    init_esm_shims();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _crypto = _interopRequireDefault(__require("crypto"));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function md5(bytes) {
      if (Array.isArray(bytes)) {
        bytes = Buffer.from(bytes);
      } else if (typeof bytes === "string") {
        bytes = Buffer.from(bytes, "utf8");
      }
      return _crypto.default.createHash("md5").update(bytes).digest();
    }
    var _default = md5;
    exports.default = _default;
  }
});

// ../../node_modules/uuid/dist/v3.js
var require_v3 = __commonJS({
  "../../node_modules/uuid/dist/v3.js"(exports) {
    "use strict";
    init_esm_shims();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _v = _interopRequireDefault(require_v35());
    var _md = _interopRequireDefault(require_md5());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var v3 = (0, _v.default)("v3", 48, _md.default);
    var _default = v3;
    exports.default = _default;
  }
});

// ../../node_modules/uuid/dist/v4.js
var require_v4 = __commonJS({
  "../../node_modules/uuid/dist/v4.js"(exports) {
    "use strict";
    init_esm_shims();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rng = _interopRequireDefault(require_rng());
    var _stringify = _interopRequireDefault(require_stringify());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function v4(options, buf, offset) {
      options = options || {};
      const rnds = options.random || (options.rng || _rng.default)();
      rnds[6] = rnds[6] & 15 | 64;
      rnds[8] = rnds[8] & 63 | 128;
      if (buf) {
        offset = offset || 0;
        for (let i = 0; i < 16; ++i) {
          buf[offset + i] = rnds[i];
        }
        return buf;
      }
      return (0, _stringify.default)(rnds);
    }
    var _default = v4;
    exports.default = _default;
  }
});

// ../../node_modules/uuid/dist/sha1.js
var require_sha1 = __commonJS({
  "../../node_modules/uuid/dist/sha1.js"(exports) {
    "use strict";
    init_esm_shims();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _crypto = _interopRequireDefault(__require("crypto"));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function sha1(bytes) {
      if (Array.isArray(bytes)) {
        bytes = Buffer.from(bytes);
      } else if (typeof bytes === "string") {
        bytes = Buffer.from(bytes, "utf8");
      }
      return _crypto.default.createHash("sha1").update(bytes).digest();
    }
    var _default = sha1;
    exports.default = _default;
  }
});

// ../../node_modules/uuid/dist/v5.js
var require_v5 = __commonJS({
  "../../node_modules/uuid/dist/v5.js"(exports) {
    "use strict";
    init_esm_shims();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _v = _interopRequireDefault(require_v35());
    var _sha = _interopRequireDefault(require_sha1());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var v5 = (0, _v.default)("v5", 80, _sha.default);
    var _default = v5;
    exports.default = _default;
  }
});

// ../../node_modules/uuid/dist/nil.js
var require_nil = __commonJS({
  "../../node_modules/uuid/dist/nil.js"(exports) {
    "use strict";
    init_esm_shims();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _default = "00000000-0000-0000-0000-000000000000";
    exports.default = _default;
  }
});

// ../../node_modules/uuid/dist/version.js
var require_version = __commonJS({
  "../../node_modules/uuid/dist/version.js"(exports) {
    "use strict";
    init_esm_shims();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _validate = _interopRequireDefault(require_validate());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function version(uuid2) {
      if (!(0, _validate.default)(uuid2)) {
        throw TypeError("Invalid UUID");
      }
      return parseInt(uuid2.substr(14, 1), 16);
    }
    var _default = version;
    exports.default = _default;
  }
});

// ../../node_modules/uuid/dist/index.js
var require_dist = __commonJS({
  "../../node_modules/uuid/dist/index.js"(exports) {
    "use strict";
    init_esm_shims();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "v1", {
      enumerable: true,
      get: function() {
        return _v.default;
      }
    });
    Object.defineProperty(exports, "v3", {
      enumerable: true,
      get: function() {
        return _v2.default;
      }
    });
    Object.defineProperty(exports, "v4", {
      enumerable: true,
      get: function() {
        return _v3.default;
      }
    });
    Object.defineProperty(exports, "v5", {
      enumerable: true,
      get: function() {
        return _v4.default;
      }
    });
    Object.defineProperty(exports, "NIL", {
      enumerable: true,
      get: function() {
        return _nil.default;
      }
    });
    Object.defineProperty(exports, "version", {
      enumerable: true,
      get: function() {
        return _version.default;
      }
    });
    Object.defineProperty(exports, "validate", {
      enumerable: true,
      get: function() {
        return _validate.default;
      }
    });
    Object.defineProperty(exports, "stringify", {
      enumerable: true,
      get: function() {
        return _stringify.default;
      }
    });
    Object.defineProperty(exports, "parse", {
      enumerable: true,
      get: function() {
        return _parse.default;
      }
    });
    var _v = _interopRequireDefault(require_v1());
    var _v2 = _interopRequireDefault(require_v3());
    var _v3 = _interopRequireDefault(require_v4());
    var _v4 = _interopRequireDefault(require_v5());
    var _nil = _interopRequireDefault(require_nil());
    var _version = _interopRequireDefault(require_version());
    var _validate = _interopRequireDefault(require_validate());
    var _stringify = _interopRequireDefault(require_stringify());
    var _parse = _interopRequireDefault(require_parse());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
  }
});

// ../../node_modules/uuidv4/build/lib/uuidv4.js
var require_uuidv4 = __commonJS({
  "../../node_modules/uuidv4/build/lib/uuidv4.js"(exports) {
    "use strict";
    init_esm_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.jsonSchema = exports.fromString = exports.empty = exports.isUuid = exports.regex = exports.uuid = void 0;
    var util_1 = __require("util");
    var uuid_1 = require_dist();
    var regex = {
      v4: /(?:^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$)|(?:^0{8}-0{4}-0{4}-0{4}-0{12}$)/u,
      v5: /(?:^[a-f0-9]{8}-[a-f0-9]{4}-5[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$)|(?:^0{8}-0{4}-0{4}-0{4}-0{12}$)/u
    };
    exports.regex = regex;
    var jsonSchema = {
      v4: { type: "string", pattern: regex.v4.toString().slice(1, -2) },
      v5: { type: "string", pattern: regex.v5.toString().slice(1, -2) }
    };
    exports.jsonSchema = jsonSchema;
    var uuidv4 = (0, util_1.deprecate)(() => (0, uuid_1.v4)(), "uuidv4() is deprecated. Use v4() from the uuid module instead.");
    exports.uuid = uuidv4;
    var isUuid = (0, util_1.deprecate)((value) => (0, uuid_1.validate)(value) && ((0, uuid_1.version)(value) === 4 || (0, uuid_1.version)(value) === 5), "isUuid() is deprecated. Use validate() from the uuid module instead.");
    exports.isUuid = isUuid;
    var empty = (0, util_1.deprecate)(() => uuid_1.NIL, "empty() is deprecated. Use NIL from the uuid module instead.");
    exports.empty = empty;
    var fromString = (0, util_1.deprecate)((text, namespace = "bb5d0ffa-9a4c-4d7c-8fc2-0a7d2220ba45") => (0, uuid_1.v5)(text, namespace), "fromString() is deprecated. Use v5() from the uuid module instead.");
    exports.fromString = fromString;
  }
});

// src/index.ts
init_esm_shims();

// src/DJForm.tsx
init_esm_shims();
var import_uuidv4 = __toESM(require_uuidv4(), 1);
import * as React from "react";
import PropTypes from "prop-types";
import { Formik, Form as FForm } from "formik";
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
  const formId = id || (0, import_uuidv4.uuid)();
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
init_esm_shims();
import PropTypes2 from "prop-types";
import { ThemeProvider } from "@mui/material/styles/index.js";
import { TextField as MUITextField, InputLabel } from "@mui/material";
import { useField } from "formik";

// src/theme/src/index.ts
init_esm_shims();
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
