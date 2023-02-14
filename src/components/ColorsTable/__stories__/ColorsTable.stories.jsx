import React from "react";
import { ColorsTable } from "../ColorsTable";

const basicDecoratorStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: "white",
};

export default {
  title: "components/ColorsTable",
  component: ColorsTable,
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

const Template = (args) => <ColorsTable {...args} />;

export const Default = () => <ColorsTable />;

export const TinyDecorator = () => <ColorsTable />;
TinyDecorator.decorators = [
  (Story) => (
    <div
      style={{
        ...basicDecoratorStyle,
        width: "200px",
        height: "100px",
      }}
    >
      <Story />
    </div>
  ),
];

export const SmallDecorator = () => <ColorsTable />;
SmallDecorator.decorators = [
  (Story) => (
    <div
      style={{
        ...basicDecoratorStyle,
        width: "300px",
        height: "200px",
      }}
    >
      <Story />
    </div>
  ),
];

export const MediumDecorator = () => <ColorsTable />;
MediumDecorator.decorators = [
  (Story) => (
    <div
      style={{
        ...basicDecoratorStyle,
        width: "500px",
        height: "350px",
      }}
    >
      <Story />
    </div>
  ),
];

export const LargeDecorator = () => <ColorsTable />;
LargeDecorator.decorators = [
  (Story) => (
    <div
      style={{
        ...basicDecoratorStyle,
        width: "900px",
        height: "600px",
      }}
    >
      <Story />
    </div>
  ),
];

export const TooHighDecorator = () => <ColorsTable />;
TooHighDecorator.decorators = [
  (Story) => (
    <div
      style={{
        ...basicDecoratorStyle,
        width: "100px",
        height: "800px",
      }}
    >
      <Story />
    </div>
  ),
];

export const TooWideDecorator = () => <ColorsTable />;
TooWideDecorator.decorators = [
  (Story) => (
    <div
      style={{
        ...basicDecoratorStyle,
        width: "100%",
        height: "100px",
      }}
    >
      <Story />
    </div>
  ),
];

export const Custom = Template.bind({});
Custom.argTypes = {
  backgroundColor: { control: { type: "color" } },
  columns: {
    control: { type: "number", min: 1, max: 50, step: 1 },
  },
  rows: {
    control: { type: "number", min: 1, max: 50, step: 1 },
  },
  allowRepeatedColors: { control: { type: "boolean" } },
  tableColorList: { control: { type: "array" } },
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
