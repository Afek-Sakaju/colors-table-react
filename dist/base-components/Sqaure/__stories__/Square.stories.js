import React from "react";
import { Square } from "../Square";
export default {
  title: "base-components/Square",
  component: Square,
  parameters: {
    controls: {
      // This line hides specified controls
      exclude: /(^id$|^onClick$)/g
    }
  },
  decorators: [Story => /*#__PURE__*/React.createElement("div", {
    style: {
      height: "95vh",
      width: "95vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Story, null))]
};
export const Default = () => /*#__PURE__*/React.createElement(Square, null);
Default.decorators = [Story => /*#__PURE__*/React.createElement("div", {
  style: {
    height: "200px",
    width: "200px"
  }
}, /*#__PURE__*/React.createElement(Story, null))];
export const AdjustSize = props => /*#__PURE__*/React.createElement("div", {
  style: {
    height: `${props.height}px`,
    width: `${props.width}px`
  }
}, /*#__PURE__*/React.createElement(Square, null));
AdjustSize.argTypes = {
  height: {
    control: {
      type: "number",
      min: 50,
      max: 3000,
      step: 50
    },
    defaultValue: 200
  },
  width: {
    control: {
      type: "number",
      min: 50,
      max: 4000,
      step: 50
    },
    defaultValue: 200
  },
  color: {
    control: false
  }
};
const Template = args => /*#__PURE__*/React.createElement(Square, args);
export const Custom = Template.bind({});
Custom.decorators = [Story => /*#__PURE__*/React.createElement("div", {
  style: {
    height: "200px",
    width: "200px"
  }
}, /*#__PURE__*/React.createElement(Story, null))];
Custom.argTypes = {
  color: {
    control: {
      type: "color"
    },
    defaultValue: "olive"
  }
};