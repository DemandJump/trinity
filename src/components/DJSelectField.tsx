import React, { ReactNode } from "react";
import { makeStyles, ThemeProvider } from "@mui/material/styles/index.js";
import theme from "./theme";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Field, ErrorMessage, FieldInputProps } from "formik";
import FormHelperText from "@mui/material/FormHelperText";
import { useField } from "formik";

export interface FormikSelectItem {
  menuItemIcon: React.ReactNode;
  label: string;
  value: string;
}

interface FormikSelectProps {
  name: string;
  items: FormikSelectItem[];
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

interface MaterialUISelectFieldProps extends FieldInputProps<string> {
  errorString?: string;
  children?: ReactNode;
  required?: boolean;
  placeholder?: string;
}

const MaterialUISelectField: React.FC<MaterialUISelectFieldProps> = ({
  errorString,
  children,
  value,
  name,
  onChange,
  onBlur,
  required,
  placeholder,
}) => {
  return (
    <FormControl fullWidth>
      <Select
        sx={{
          "& .MuiSelect-outlined": {
            padding: "12px",
          },
        }}
        displayEmpty
        renderValue={(value) => (value === "" ? placeholder : value)}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        inputProps={{ padding: 0 }}
      >
        {children}
      </Select>

      <FormHelperText>{errorString}</FormHelperText>
    </FormControl>
  );
};

const DJSelectField: React.FC<FormikSelectProps> = ({
  name,
  items,
  required = false,
  onChange,
  placeholder,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Field
        name={name}
        as={MaterialUISelectField}
        errorString={<ErrorMessage name={name} />}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
      >
        {items.map((item) => (
          <MenuItem key={item.value} value={item.label}>
            <ListItemText>{item.label}</ListItemText>
            {item.menuItemIcon}
          </MenuItem>
        ))}
      </Field>
    </ThemeProvider>
  );
};

export default DJSelectField;
