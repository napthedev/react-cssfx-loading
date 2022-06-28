import { Meta, Story } from "@storybook/react";
import Ring, { RingProps } from "../src/Ring";

import React from "react";

const meta: Meta = {
  title: "Ring",
  component: Ring,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<RingProps> = args => <Ring {...args} />;

export const Default = Template.bind({});

Default.args = {};
