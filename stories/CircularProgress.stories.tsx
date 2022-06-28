import CircularProgress, { CircularProgressProps } from "../src/CircularProgress";
import { Meta, Story } from "@storybook/react";

import React from "react";

const meta: Meta = {
  title: "Circular Progress",
  component: CircularProgress,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<CircularProgressProps> = args => <CircularProgress {...args} />;

export const Default = Template.bind({});

Default.args = {};
