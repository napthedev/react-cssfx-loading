import Messaging, { MessagingProps } from "../src/Messaging";
import { Meta, Story } from "@storybook/react";

import React from "react";

const meta: Meta = {
  title: "Messaging",
  component: Messaging,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<MessagingProps> = args => <Messaging {...args} />;

export const Default = Template.bind({});

Default.args = {};
