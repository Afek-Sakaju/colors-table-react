import React, { useState } from "react";
import { matrix } from "./utils/consts";
import { Square } from "./base-components";
import { generateRandomColor } from "./utils/functions";

function App() {
  const [colorState, setColorState] = useState(generateRandomColor());

  return (
    <div className="row">
      {matrix.map((row, i) => {
        return row.map((color, j) => {
          return (
            <Square
              value={colorState}
              setValue={setColorState}
              key={`${i}-${j}`}
            />
          );
        });
      })}
    </div>
  );
}

export default App;
