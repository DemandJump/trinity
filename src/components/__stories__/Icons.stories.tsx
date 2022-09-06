import React from "react";

import { AnalyticsSml } from "../Icons";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Icons",
  parameters: {
    docs: {
      // page: README,
    },
  },
  args: {},
} as Meta;

export const Default: Story = () => {
  return (
    <>
      <h2>Icons</h2>
      <AnalyticsSml />
    </>
  );
};
Default.storyName = "Icons";
