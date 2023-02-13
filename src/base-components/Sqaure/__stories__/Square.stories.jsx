import React from "react";
import { Square } from "../Square";

export default {
  title: "base-components/Square",
  component: Square,
  decorators: [
    (Story) => (
      <div
        style={{
          height: "600px",
          width: "1000px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Square {...args} />;

export const Default = () => {
  return <Square />;
};
Default.decorators = [
  (Story) => (
    <div
      style={{
        height: "300px",
        width: "300px",
      }}
    >
      <Story />
    </div>
  ),
];

export const tinyDecoratorSquare = () => {
  return <Square color={"red"} />;
};
tinyDecoratorSquare.decorators = [
  (Story) => (
    <div
      style={{
        height: "20px",
        width: "20px",
      }}
    >
      <Story />
    </div>
  ),
];

export const smallDecoratorSquare = () => {
  return <Square color={"red"} />;
};
smallDecoratorSquare.decorators = [
  (Story) => (
    <div
      style={{
        height: "100px",
        width: "100px",
      }}
    >
      <Story />
    </div>
  ),
];

export const mediumDecoratorSquare = () => {
  return <Square color={"red"} />;
};
mediumDecoratorSquare.decorators = [
  (Story) => (
    <div
      style={{
        height: "200px",
        width: "200px",
      }}
    >
      <Story />
    </div>
  ),
];

export const largeDecoratorSquare = () => {
  return <Square color={"red"} />;
};
largeDecoratorSquare.decorators = [
  (Story) => (
    <div
      style={{
        height: "400px",
        width: "400px",
      }}
    >
      <Story />
    </div>
  ),
];

export const Custom = Template.bind({});
Custom.decorators = [
  (Story) => (
    <div
      style={{
        height: "200px",
        width: "200px",
      }}
    >
      <Story />
    </div>
  ),
];
Custom.argTypes = {
  color: {
    control: { type: "color" },
  },
  allowRepeatedColors: { control: { type: "boolean" } },
};
Custom.args = {
  color: "purple",
  allowRepeatedColors: true,
};
