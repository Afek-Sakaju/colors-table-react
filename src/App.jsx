import React from "react";

import { ManagedColorsTable } from "./components";
import { colors } from "./utils";

function App() {
  return (
    <div className="app-container">
      <ManagedColorsTable
        rows={5}
        columns={5}
        allowRepeatedColors={false}
        tableColorList={colors}
      />
    </div>
  );
}

export default App;
