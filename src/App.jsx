import React from "react";

import { ManagedColorsTable } from "./components";
import { colors } from "./utils";

function App() {
  return (
    <div className="app-container">
      <ManagedColorsTable
        columns={3}
        rows={4}
        allowRepeatedColors={false}
        tableColorList={colors}
      />
    </div>
  );
}

export default App;
