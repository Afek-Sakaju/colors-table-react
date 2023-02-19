import React from "react";

import { ColorsTable } from "./components";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
        width: "70vw",
      }}
    >
      <ColorsTable
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
          "silver",
          "lime",
          "wheat",
          "cyan",
          "DarkOliveGreen",
          "lightBlue",
        ]}
      />
    </div>
  );
}

export default App;
