import BouncingBalls, { BouncingBallsProps } from "../src/BouncingBalls";
import { Meta, Story } from "@storybook/react";

import React from "react";

const meta: Meta = {
  title: "Bouncing Balls",
  component: BouncingBalls,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<BouncingBallsProps> = args => <BouncingBalls {...args} />;

export const Default = Template.bind({});

Default.args = {};
