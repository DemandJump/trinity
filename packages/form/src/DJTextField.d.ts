/* eslint-disable @typescript-eslint/ban-types */
import { ReactNode } from 'react';
import { FieldValidator } from 'formik';

interface FieldChildProps {
  input: ReactNode;
}

export interface FieldProps {
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

export default DJTextField;