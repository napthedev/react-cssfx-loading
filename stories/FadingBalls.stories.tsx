import FadingBalls, { FadingBallsProps } from "../src/FadingBalls";
import { Meta, Story } from "@storybook/react";

import React from "react";

const meta: Meta = {
  title: "Fading Balls",
  component: FadingBalls,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<FadingBallsProps> = args => <FadingBalls {...args} />;

export const Default = Template.bind({});

Default.args = {};
