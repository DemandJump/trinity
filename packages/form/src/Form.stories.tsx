/* eslint-disable no-console */
import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import * as yup from 'yup';


import {
	Form,
  TextField,
} from '.';


export default {
  title: 'Form Components/Form',
  parameters: {
    docs: {
      // page: README,
    },
  },
  args: {
    required: false,
  },
} as Meta;

type FormStoryProps = { required: boolean };

export const Default: Story<FormStoryProps> = ({ required }) => {

  return (
    <Form
      onSubmit={() => {
        console.log('submitted');
      }}
      initialValues={{
        myInput: "Initial value",
      }}
      validationSchema={yup.object().shape({
        myInput: yup.string().min(2, "That's too short").max(6, "That's too long").required("This field is required")
      })}
    >
      <h2>Form</h2>
      <br />
      <TextField name="myInput" data-testid="hello-input" errorMessage="That's an error, bud!"/>
    </Form>
  );
};
Default.storyName = 'TextField';

