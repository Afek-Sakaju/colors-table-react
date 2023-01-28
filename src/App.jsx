import React from "react";
import { matrix } from "./utils/consts";
import { Square } from "./base-components";

function App() {
  console.log(JSON.stringify(matrix));

  return (
    <div className="row">
      {matrix.map((row, i) => {
        return row.map((color, j) => (
          <Square value={color} key={`${i}-${j}`} />
        ));
      })}
    </div>
  );
}

export default App;
