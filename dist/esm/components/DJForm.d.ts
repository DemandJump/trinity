/// <reference types="react" />
import PropTypes from "prop-types";
import { DJFormD } from "./types";
declare const DJForm: {
    ({ initialValues, enableReinitialize, onSubmit, initialStatus, initialErrors, initialTouched, onReset, validationSchema, validate, id, innerRef, children, ...rest }: DJFormD): JSX.Element;
    propTypes: {
        children: PropTypes.Requireable<string | number | boolean | ((...args: any[]) => any) | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        enableReinitialize: PropTypes.Requireable<boolean>;
        id: PropTypes.Requireable<string>;
        initialErrors: PropTypes.Requireable<object>;
        initialStatus: PropTypes.Requireable<any>;
        initialTouched: PropTypes.Requireable<object>;
        initialValues: PropTypes.Validator<object>;
        innerRef: PropTypes.Requireable<any>;
        onReset: PropTypes.Requireable<(...args: any[]) => any>;
        onSubmit: PropTypes.Requireable<(...args: any[]) => any>;
        validate: PropTypes.Requireable<(...args: any[]) => any>;
        validationSchema: PropTypes.Requireable<object>;
    };
    defaultProps: {
        onSubmit: () => void;
    };
};
export default DJForm;
