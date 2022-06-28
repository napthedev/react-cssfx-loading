import BarWave, { BarWaveProps } from "../src/BarWave";
import { Meta, Story } from "@storybook/react";

import React from "react";

const meta: Meta = {
  title: "Bar Wave",
  component: BarWave,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<BarWaveProps> = args => <BarWave {...args} />;

export const Default = Template.bind({});

Default.args = {};
