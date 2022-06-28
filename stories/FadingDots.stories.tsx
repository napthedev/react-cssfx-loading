import FadingDots, { FadingDotsProps } from "../src/FadingDots";
import { Meta, Story } from "@storybook/react";

import React from "react";

const meta: Meta = {
  title: "Fading Dots",
  component: FadingDots,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<FadingDotsProps> = args => <FadingDots {...args} />;

export const Default = Template.bind({});

Default.args = {};
