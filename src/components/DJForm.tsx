import * as React from "react";
import PropTypes from "prop-types";
import { Formik, Form as FForm, FormikProps } from "formik";

import { DJFormD } from "./types";

const DJForm = ({
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
}: DJFormD) => {
  const formId = id;

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={enableReinitialize}
      onSubmit={onSubmit}
      onReset={onReset}
      initialStatus={initialStatus}
      initialErrors={initialErrors}
      initialTouched={initialTouched}
      validationSchema={validationSchema}
      validate={validate}
      innerRef={innerRef}
    >
      {(props) => (
        <FForm id={formId} {...rest}>
          {children}
        </FForm>
      )}
    </Formik>
  );
};

/* eslint-disable react/forbid-prop-types */
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
  validationSchema: PropTypes.object,
};

export default DJForm;
