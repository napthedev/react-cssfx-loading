import { Meta, Story } from "@storybook/react";
import Spin, { SpinProps } from "../src/Spin";

import React from "react";

const meta: Meta = {
  title: "Spin",
  component: Spin,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<SpinProps> = args => <Spin {...args} />;

export const Default = Template.bind({});

Default.args = {};
