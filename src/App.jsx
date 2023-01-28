import React, { useState } from "react";
import { matrix } from "./utils/consts";
import { Square } from "./base-components";

function App() {
  console.log(JSON.stringify(matrix));

  return (
    <div className="row">
      {matrix.map((row, i) => {
        return row.map((color, j) => {
          
          return <Square value={colorState} key={`${i}-${j}`} />;
        });
      })}
    </div>
  );
}

export default App;
