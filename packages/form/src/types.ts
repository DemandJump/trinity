import { FormikProps, FormikValues, FormikHelpers } from "formik";
import React from "react";

export type DJTextFieldD = {
	className?: string,
	labelText?: string,
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
	name: string,
	required?: boolean,
	label?: string,
	helpMessage?: string,
	formikProps?: FormikProps<any>,
	disabled?: boolean,
	id?: string,
	rest?: any,
};

export type DJFormD = {
	initialValues: FormikValues,
  enableReinitialize?: boolean;
  onSubmit: (values: object, formikHelpers: FormikHelpers<object>) => void
  initialStatus?: string;
  initialErrors?: object;
  initialTouched?: object;
  onReset?: () => void;
  validationSchema?: object;
  validate?: (values: object) => object;
  focusInvalidField?: boolean;
  id?: string;
	innerRef?: React.Ref<any>,
  invalidInputSelectors?: string[],
	children?: React.ReactNode,
  rest?: any;
}