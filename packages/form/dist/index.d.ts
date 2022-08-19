import * as _emotion_react_jsx_runtime from '@emotion/react/jsx-runtime';
import PropTypes from 'prop-types';
import { FormikProps, FormikValues, FormikHelpers } from 'formik';
import React from 'react';

declare type DJTextFieldD = {
    className?: string;
    labelText?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    name: string;
    required?: boolean;
    label?: string;
    helpMessage?: string;
    formikProps?: FormikProps<any>;
    disabled?: boolean;
    id?: string;
    rest?: any;
};
declare type DJFormD = {
    initialValues: FormikValues;
    enableReinitialize?: boolean;
    onSubmit: (values: object, formikHelpers: FormikHelpers<object>) => void;
    initialStatus?: string;
    initialErrors?: object;
    initialTouched?: object;
    onReset?: () => void;
    validationSchema?: object;
    validate?: (values: object) => object;
    focusInvalidField?: boolean;
    id?: string;
    innerRef?: React.Ref<any>;
    invalidInputSelectors?: string[];
    children?: React.ReactNode;
    rest?: any;
};

declare const DJForm: {
    ({ initialValues, enableReinitialize, onSubmit, initialStatus, initialErrors, initialTouched, onReset, validationSchema, validate, id, innerRef, children, ...rest }: DJFormD): _emotion_react_jsx_runtime.JSX.Element;
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

declare const DJTextField: {
    ({ className, onChange: propsOnChange, labelText, name, required, label, helpMessage, formikProps, disabled, id, ...rest }: DJTextFieldD): _emotion_react_jsx_runtime.JSX.Element;
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

export { DJForm, DJTextField };
