import React from "react";

import ColorsTable from "../ColorsTable";
import { COLORS_LIST, createMatrix } from "@utils";

const flexDisplayCentered = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const dataMatrix = createMatrix({
  rows: 5,
  columns: 4,
  colorsList: COLORS_LIST,
});

export default {
  title: "components/ColorsTable",
  component: ColorsTable,
  parameters: {
    controls: {
      exclude: /^(onClick|dataMatrix)$/g,
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          ...flexDisplayCentered,
          width: "95vw",
          height: "95vh",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Default = () => <ColorsTable dataMatrix={dataMatrix} />;
Default.decorators = [
  (Story) => (
    <div
      style={{
        ...flexDisplayCentered,
        width: "600px",
        height: "400px",
      }}
    >
      <Story />
    </div>
  ),
];

export const AdjustSize = (props) => (
  <div
    style={{
      ...flexDisplayCentered,
      height: `${props.height}px`,
      width: `${props.width}px`,
    }}
  >
    <ColorsTable dataMatrix={dataMatrix} />
  </div>
);
AdjustSize.argTypes = {
  height: {
    control: { type: "number", min: 50, max: 3000, step: 50 },
    defaultValue: 400,
  },
  width: {
    control: { type: "number", min: 50, max: 4000, step: 50 },
    defaultValue: 600,
  },
  backgroundColor: { control: false },
};

const Template = (args) => <ColorsTable dataMatrix={dataMatrix} {...args} />;

export const Custom = Template.bind({});
Custom.argTypes = {
  backgroundColor: { control: { type: "color" }, defaultValue: "white" },
};
Custom.decorators = [
  (Story) => (
    <div
      style={{
        ...flexDisplayCentered,
        width: "600px",
        height: "400px",
      }}
    >
      <Story />
    </div>
  ),
];
