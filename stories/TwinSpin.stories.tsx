import { Meta, Story } from "@storybook/react";
import TwinSpin, { TwinSpinProps } from "../src/TwinSpin";

import React from "react";

const meta: Meta = {
  title: "Twin Spin",
  component: TwinSpin,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<TwinSpinProps> = args => <TwinSpin {...args} />;

export const Default = Template.bind({});

Default.args = {};
