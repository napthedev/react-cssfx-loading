import { Meta, Story } from "@storybook/react";
import SpinStretch, { SpinStretchProps } from "../src/SpinStretch";

import React from "react";

const meta: Meta = {
  title: "Spin Stretch",
  component: SpinStretch,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<SpinStretchProps> = args => <SpinStretch {...args} />;

export const Default = Template.bind({});

Default.args = {};
