import React, { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles/index.js";
import theme from "./theme";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Field, ErrorMessage, FieldInputProps } from "formik";
import FormHelperText from "@mui/material/FormHelperText";

export interface FormikSelectItem {
  menuItemIcon: React.ReactNode;
  label: string;
  value: string;
}

interface FormikSelectProps {
  name: string;
  items: FormikSelectItem[];
  required?: boolean;
}

interface MaterialUISelectFieldProps extends FieldInputProps<string> {
  errorString?: string;
  children: ReactNode;
  required: boolean;
}

const MaterialUISelectField: React.FC<MaterialUISelectFieldProps> = ({
  errorString,
  children,
  value,
  name,
  onChange,
  onBlur,
  required,
}) => {
  return (
    <FormControl fullWidth>
      <Select
        displayEmpty
        renderValue={(value) => value !== "" && value}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
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
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Field
        name={name}
        as={MaterialUISelectField}
        errorString={<ErrorMessage name={name} />}
        required={required}
      >
        {items.map((item) => (
          <MenuItem key={item.value} value={item.label}>
            <ListItemText>{item.label}</ListItemText>
            <ListItemIcon>{item.menuItemIcon}</ListItemIcon>
          </MenuItem>
        ))}
      </Field>
    </ThemeProvider>
  );
};

export default DJSelectField;
