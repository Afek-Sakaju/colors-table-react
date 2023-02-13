import React from "react";
import { Square } from "../Square";

export default {
  title: "base-components/Square",
  component: Square,
  argTypes: {
    color: {
      control: { type: "color" },
    },
  },
};

export const Colored = () => {
  return <Square />;
};

export const Default = () => {
  return <Square />;
};

const Template = (args) => <Square {...args} />;
export const Custom = Template.bind({});
Custom.args = {};
