import React from "react";
import { Row } from "../Row";

export default {
  title: "components/Row",
  component: Row,
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

const Template = (args) => <Row {...args} />;

export const Default = () => (
  <Row
    colors={[
      ["green", "blue"],
      ["green", "blue"],
    ]}
    row={["green", "blue"]}
    i={0}
  />
);
export const Custom = Template.bind({});
Custom.args = {};
