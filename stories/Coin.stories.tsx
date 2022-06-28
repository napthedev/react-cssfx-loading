import Coin, { CoinProps } from "../src/Coin";
import { Meta, Story } from "@storybook/react";

import React from "react";

const meta: Meta = {
  title: "Coin",
  component: Coin,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<CoinProps> = args => <Coin {...args} />;

export const Default = Template.bind({});

Default.args = {};
