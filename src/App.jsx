import React from "react";

import { ManagedColorsTable } from "./components";
import { colors } from "./utils";

function App() {
  return (
    <div className="app-container">
      <ManagedColorsTable
        rows={3}
        columns={3}
        allowRepeatedColors={false}
        tableColorList={colors}
      />
    </div>
  );
}

export default App;
