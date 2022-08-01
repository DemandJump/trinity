import React from 'react';
import PropTypes from 'prop-types';
import {  styled, ThemeProvider} from "@mui/material/styles";
import { TextField as MUITextField, InputLabel } from '@mui/material';
import { useField } from 'formik';
import { v4 as uuid } from "uuid";
import theme from '../../theme/src';

const TextField = ({ tag: Tag, className, onChange: propsOnChange, labelText, validate, name, required, label, helpMessage, formikProps,  ...rest }) => {
  const [{ onChange: useFieldOnChange, ...field }, metadata, helpers] = useField(
    name
  );
  console.log('field', field)
  console.log('metadata', metadata)

  // const DJTextField = styled(MUITextField)(({ theme }) => ({
  //   marginTop: "16px",
  //   // "& .MuiInputBase-input": {
  //   //   fontSize: 16,
  //   //   fontWeight: 400,
  //   //   width: "auto",
  //   //   padding: "16px 12px 16px 12px",
  //   //   "&:focus": {
  //   //     borderColor: theme.palette.primary.main,
  //   //   },
  //   //   border: `1px solid`,
  //   //   borderRadius: "3px",
  //   //   boxSizing: "border-box",
  //   //   height: "48px",
  //   // },
  //   // "& .MuiFormHelperText-root": {
  //   //   color: "#373F50",
  //   //   fontSize: '12px',
  //   //   fontWeight: 400,
  //   // },
  //   // "& .MuiFormHelperText-root.Mui-error": {
  //   //   color: theme.palette.error.main
  //   // },
  // }));
  const htmlId = rest?.id || uuid();
  const inputLabelStyle = {
    color: metadata.error
      ? theme.palette.error.main
      : theme.palette.metalgrey.main,
  };
  const rootStyle = {
        marginTop: "8px",
        // color: theme.palette.metalgrey.main,
        // fontSize: 16,
        // fontWeight: 400,
        // width: "auto",
        padding: "8px 6px",
        "&:focus": {
          borderColor: theme.palette.primary.main,
        },
        // border: `1px solid`,
        // borderRadius: "3px",
        // // boxSizing: "border-box",
        color: metadata.error? theme.palette.error.main : "#56627C",
        height: "48px",
  };
  return (
    <ThemeProvider theme={theme}>
      <InputLabel style={inputLabelStyle} shrink htmlFor={htmlId}>
        {labelText}
      </InputLabel>
      <MUITextField
        style={rootStyle}
        id={htmlId}
        variant="outlined"
        {...rest}
        InputLabelProps={{ shrink: false, style: { color: "#56627C" } }}
        label={!metadata.touched && !field.value && label}
        className={className}
        name={name}
        required={required}
        value={field.value}
        error={!!metadata.error}
        helperText={metadata.error || helpMessage}
        InputProps={{
          style: { color: metadata.error ? theme.palette.error.main : "#56627C", }
        }}
        FormHelperTextProps={{
          style: {
            color: metadata.error
              ? theme.palette.error.main
              : theme.palette.metalgrey.main,
          },
        }}
        onBlur={() => {
          if (!metadata.touched) {
            helpers.setTouched(true);
          }
        }}
        onChange={(e) => {
          if (!metadata.touched) {
            helpers.setTouched(true);
          }
          useFieldOnChange(e);
          if (propsOnChange) {
            propsOnChange(e);
          }
        }}
      />
    </ThemeProvider>
  );
};

TextField.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  validate: PropTypes.func,
};

TextField.defaultProps = {
  required: false,
};

export default TextField;