import React from 'react';
import PropTypes from 'prop-types';
import { TextField as MUITextField } from '@material-ui/core';
import { useField } from 'formik';

const TextField = ({ tag: Tag, className, onChange: propsOnChange, validate, name,  required, errorMessage, ...rest }) => {
  const [{ onChange: useFieldOnChange, ...field }, metadata] = useField({
    name,
    validate,
  });



  console.log('metadata:', metadata);
  const extraProps = {};


  return (
    <MUITextField
      variant="outlined"
      {...rest}
      className={className}
      name={name}
      required={required}
      error={!!metadata.error}
      helperText={metadata.error}
      onChange={(e) => {
        useFieldOnChange(e);
        if (propsOnChange) {
          propsOnChange(e);
        }
      }}
    />
  );
};

TextField.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  validate: PropTypes.func,
  errorMessage: PropTypes.string,
};

TextField.defaultProps = {
  required: false,
};

export default TextField;