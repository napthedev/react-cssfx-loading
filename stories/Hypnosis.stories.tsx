import Hypnosis, { HypnosisProps } from "../src/Hypnosis";
import { Meta, Story } from "@storybook/react";

import React from "react";

const meta: Meta = {
  title: "Hypnosis",
  component: Hypnosis,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<HypnosisProps> = args => <Hypnosis {...args} />;

export const Default = Template.bind({});

Default.args = {};
