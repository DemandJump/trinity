import { FormikProps, FormikValues, FormikHelpers } from "formik";
import React from "react";

export type DJTextFieldD = {
	className?: string,
	labelText?: string,
	onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
	name: string,
	required?: boolean,
	label?: string,
	helpMessage?: string,
	formikProps?: FormikProps<any>,
	disabled?: boolean,
	id?: string,
	iconBefore?: JSX.Element,
	type: "text"|"password"|"email",
	rest?: any,
};

type FormikSubmitHandler<V> = (value: V, formikHelpers: FormikHelpers<V>) => void;

export type DJFormD = {
	initialValues: FormikValues,
	enableReinitialize?: boolean;
	onSubmit: FormikSubmitHandler<any>;
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