import React from "react";
import { ColorsTable } from "../ColorsTable";
const basicDecoratorStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: "white"
};
export default {
  title: "components/ColorsTable",
  component: ColorsTable,
  decorators: [Story => /*#__PURE__*/React.createElement("div", {
    style: {
      ...basicDecoratorStyle,
      width: "95vw",
      height: "95vh"
    }
  }, /*#__PURE__*/React.createElement(Story, null))]
};
const Template = args => /*#__PURE__*/React.createElement(ColorsTable, args);
export const Default = () => /*#__PURE__*/React.createElement(ColorsTable, null);
Default.decorators = [Story => /*#__PURE__*/React.createElement("div", {
  style: {
    ...basicDecoratorStyle,
    width: "50%",
    height: "40%"
  }
}, /*#__PURE__*/React.createElement(Story, null))];
export const AdjustSize = props => /*#__PURE__*/React.createElement("div", {
  style: {
    height: `${props.height}px`,
    width: `${props.width}px`
  }
}, /*#__PURE__*/React.createElement(ColorsTable, null));
AdjustSize.argTypes = {
  height: {
    control: {
      type: "number",
      min: 50,
      max: 3000,
      step: 50
    },
    defaultValue: 500
  },
  width: {
    control: {
      type: "number",
      min: 50,
      max: 4000,
      step: 50
    },
    defaultValue: 500
  },
  backgroundColor: {
    control: false
  },
  rows: {
    control: false
  },
  columns: {
    control: false
  },
  allowRepeatedColors: {
    control: false
  },
  colors: {
    control: false
  }
};
export const Custom = Template.bind({});
Custom.argTypes = {
  backgroundColor: {
    control: {
      type: "color"
    }
  },
  columns: {
    control: {
      type: "number",
      min: 1,
      max: 50,
      step: 1
    },
    defaultValue: 5
  },
  rows: {
    control: {
      type: "number",
      min: 1,
      max: 50,
      step: 1
    },
    defaultValue: 4
  },
  allowRepeatedColors: {
    control: {
      type: "boolean"
    }
  },
  colors: {
    control: false
  }
};
Custom.decorators = [Story => /*#__PURE__*/React.createElement("div", {
  style: {
    ...basicDecoratorStyle,
    width: "850px",
    height: "350px"
  }
}, /*#__PURE__*/React.createElement(Story, null))];