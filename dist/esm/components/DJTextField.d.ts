import PropTypes from "prop-types";
import { DJTextFieldD } from "./types";
import { jsx } from "@emotion/react";
declare const DJTextField: {
    ({ className, onChange: propsOnChange, labelText, name, required, label, helpMessage, formikProps, disabled, id, iconBefore, type, ref, autoComplete, ...rest }: DJTextFieldD): jsx.JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        name: PropTypes.Validator<string>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        required: PropTypes.Requireable<boolean>;
    };
    defaultProps: {
        required: boolean;
    };
};
export default DJTextField;
