import React from "react";
import { ManagedColorsTable } from "./components";
import { colors } from "./utils";
function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "app-container"
  }, /*#__PURE__*/React.createElement(ManagedColorsTable, {
    rows: 5,
    columns: 5,
    allowRepeatedColors: false,
    colors: colors
  }));
}
export default App;