import { FormikConfig, FieldValidator } from 'formik';
import { ReactNode } from 'react';

/* eslint-disable @typescript-eslint/no-explicit-any */


type FormProps<FormValues> = {
  id?: string;
  focusInvalidField?: boolean;
  invalidInputSelectors?: string;
} & FormikConfig<FormValues>;

declare const Form: <FormValues>(props: FormProps<FormValues>) => JSX.Element;

/* eslint-disable @typescript-eslint/ban-types */


interface FieldChildProps {
  input: ReactNode;
}

interface FieldProps {
	[key: string]: any;
  type?: string;
  name: string;
  validate?: FieldValidator;
  tag?: Node | string;
  feedback?: boolean;
  help?: boolean;
  required?: boolean;
  label?: ReactNode;
  labelHidden?: boolean | false;
  disabled?: boolean | false;
  readOnly?: boolean | false;
  inputClass?: string;
  labelClass?: string;
  helpMessage?: string | object;
  errorMessage?: string | object;
  labelAttrs?: HTMLLabelElement;
  children?: (props: FieldChildProps) => ReactNode;
  append?: string | ReactNode;
  prepend?: string | ReactNode;
  helpId?: string;
}

declare const DJTextField: (props: FieldProps) => JSX.Element;

export { DJTextField, FieldProps, Form, FormProps };
