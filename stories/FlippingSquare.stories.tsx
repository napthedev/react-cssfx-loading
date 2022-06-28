import FlippingSquare, { FlippingSquareProps } from "../src/FlippingSquare";
import { Meta, Story } from "@storybook/react";

import React from "react";

const meta: Meta = {
  title: "Flipping Square",
  component: FlippingSquare,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<FlippingSquareProps> = args => <FlippingSquare {...args} />;

export const Default = Template.bind({});

Default.args = {};
