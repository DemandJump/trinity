/* eslint-disable no-console */
import * as React from "react";
import { Meta, Story } from "@storybook/react";
import * as yup from "yup";
import { DJForm, DJTextField } from "../../";

export default {
  title: "Form Components/Form",
  parameters: {
    docs: {
      // page: README,
    },
  },
  args: {
    required: false,
    initialValue: false,
    helpMessage: false,
    disabled: false,
    labelText: true,
  },
} as Meta;

type FormStoryProps = {
  required: boolean;
  initialValue: boolean;
  helpMessage: boolean;
  disabled: boolean;
  labelText: boolean;
};

export const Default: Story<FormStoryProps> = ({
  required,
  initialValue,
  helpMessage,
  disabled,
  labelText,
}) => {
  return (
    <>
      <h2>TextField</h2>
      <DJForm
        onSubmit={() => {
          window.alert("Submitted.");
        }}
        initialValues={{
          myInput: initialValue ? "Example Initial Value" : undefined,
        }}
        validationSchema={yup.object().shape({
          myInput: required
            ? yup
                .string()
                .min(2, "That's too short")
                .max(6, "That's too long")
                .required("This field is required")
            : yup.string().min(2, "That's too short").max(6, "That's too long"),
        })}
      >
        <DJTextField
          name="myInput"
          label="Placeholder label"
          helpMessage={helpMessage ? "Example Help Message" : ""}
          disabled={disabled}
          labelText={labelText ? "My Label" : ""}
        />
      </DJForm>
    </>
  );
};
Default.storyName = "DJTextField";
