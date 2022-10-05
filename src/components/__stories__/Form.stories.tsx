/* eslint-disable no-console */
import * as React from "react";
import { Meta, Story } from "@storybook/react";
import * as yup from "yup";
import { DJForm, DJTextField, DJSelectField } from "../../index";
import ActionSearch from "../../components/Icons/ActionSearch";
import ActionTrash from "../../components/Icons/ActionTrash";

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
    iconBefore: false,
  },
} as Meta;

type FormStoryProps = {
  required: boolean;
  initialValue: boolean;
  helpMessage: boolean;
  disabled: boolean;
  labelText: boolean;
  iconBefore: boolean;
};

const menuOptions = [
  {
    menuItemIcon: (
      <ActionTrash
        style={{ width: "24px" }}
        onClick={() => console.log("clicked")}
      />
    ),
    label: "Topics Last Quarter",
    value: "hi.com",
  },
  {
    menuItemIcon: <ActionTrash style={{ width: "24px" }} />,
    label: "Keyword Performance",
    value: "hello.com",
  },
];
const handleSubmit = (values) => {
  console.log(values.myInput);
};

export const Default: Story<FormStoryProps> = ({
  required,
  initialValue,
  helpMessage,
  disabled,
  labelText,
  iconBefore,
}) => {
  return (
    <>
      <h2>TextField</h2>
      <DJForm
        onSubmit={handleSubmit}
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
        <div style={{ padding: "30px" }}>
          <DJTextField
            type="text"
            name="myInput"
            label="Placeholder label"
            helpMessage={helpMessage ? "Example Help Message" : ""}
            disabled={disabled}
            labelText={labelText ? "My Label" : ""}
            iconBefore={
              iconBefore ? <ActionSearch style={{ width: "24px" }} /> : <></>
            }
          />
        </div>
      </DJForm>
    </>
  );
};
Default.storyName = "DJTextField";

const handleChange = (e) => {
  console.log("e.target", e.target);
};

export const Select: Story<FormStoryProps> = ({
  required,
  initialValue,
  helpMessage,
  disabled,
  labelText,
  iconBefore,
}) => {
  return (
    <>
      <h2>DJSelectField</h2>
      <DJForm
        onSubmit={() => {
          window.alert("Submitted.");
        }}
        initialValues={{
          mySelect: "Example text",
        }}
      >
        <div style={{ padding: "30px" }}>
          <DJSelectField
            name="mySelect"
            items={menuOptions}
            onChange={handleChange}
          ></DJSelectField>
        </div>
      </DJForm>
    </>
  );
};
Select.storyName = "DJSelectField";
