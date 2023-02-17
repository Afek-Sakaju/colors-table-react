import React from "react";
import { Row } from "../Row";

const basicDecoratorStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  borderRadius: "5% ",
  overflow: "auto",
  backgroundColor: "white",
};

const tempColors = [
  ["blue", "red", "green"],
  ["grey", "cyan", "lime"],
];

export default {
  title: "components/Row",
  component: Row,
  decorators: [
    (Story) => (
      <div
        style={{
          ...basicDecoratorStyle,
          width: "95vw",
          height: "95vh",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Row {...args} />;

export const TinyDecorator = () => <Row colors={tempColors} i={0} />;
TinyDecorator.decorators = [
  (Story) => (
    <div
      style={{
        ...basicDecoratorStyle,
        width: "100px",
        height: "50px",
      }}
    >
      <Story />
    </div>
  ),
];

export const SmallDecorator = () => <Row colors={tempColors} i={0} />;
SmallDecorator.decorators = [
  (Story) => (
    <div
      style={{
        ...basicDecoratorStyle,
        width: "300px",
        height: "100px",
      }}
    >
      <Story />
    </div>
  ),
];

export const MediumDecorator = () => <Row colors={tempColors} i={0} />;
MediumDecorator.decorators = [
  (Story) => (
    <div
      style={{
        ...basicDecoratorStyle,
        width: "500px",
        height: "200px",
      }}
    >
      <Story />
    </div>
  ),
];

export const LargeDecorator = () => <Row colors={tempColors} i={0} />;
LargeDecorator.decorators = [
  (Story) => (
    <div
      style={{
        ...basicDecoratorStyle,
        width: "900px",
        height: "300px",
      }}
    >
      <Story />
    </div>
  ),
];

export const TooHighDecorator = () => <Row colors={tempColors} i={0} />;
TooHighDecorator.decorators = [
  (Story) => (
    <div
      style={{
        ...basicDecoratorStyle,
        width: "200px",
        height: "700px",
      }}
    >
      <Story />
    </div>
  ),
];

export const TooWideDecorator = () => <Row colors={tempColors} i={0} />;
TooWideDecorator.decorators = [
  (Story) => (
    <div
      style={{
        ...basicDecoratorStyle,
        width: "100%",
        height: "50px",
      }}
    >
      <Story />
    </div>
  ),
];

export const Custom = Template.bind({});
Custom.args = {
  colors: tempColors,
  i: 0,
  allowRepeatedColors: true,
};
Custom.argTypes = {
  i: {
    control: { type: "number", min: 0, max: tempColors.length - 1, step: 1 },
  },
  allowRepeatedColors: { control: { type: "boolean" } },
};
Custom.decorators = [
  (Story) => (
    <div
      style={{
        ...basicDecoratorStyle,
        width: "850px",
        height: "350px",
      }}
    >
      <Story />
    </div>
  ),
];
