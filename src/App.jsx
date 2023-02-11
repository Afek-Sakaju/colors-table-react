import React from "react";

import { ColorsTable } from "./components";
import { generateUniqueId } from "./utils";

function App() {
  return (
    <ColorsTable
      width="1300px"
      height="700px"
      columns={5}
      rows={5}
      allowRepeatedColors={false}
      tableColorList={[
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple",
        "pink",
        "black",
        "gray",
        "brown",
        "gold",
      ]}
      key={generateUniqueId()}
    />
  );
}

export default App;
