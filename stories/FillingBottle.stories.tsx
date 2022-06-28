import FillingBottle, { FillingBottleProps } from "../src/FillingBottle";
import { Meta, Story } from "@storybook/react";

import React from "react";

const meta: Meta = {
  title: "Filling Bottle",
  component: FillingBottle,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<FillingBottleProps> = args => <FillingBottle {...args} />;

export const Default = Template.bind({});

Default.args = {};
