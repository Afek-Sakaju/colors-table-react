import React from "react";

import { ManagedColorsTable } from "@components";
import { COLORS_LIST } from "@utils";

function App() {
  return (
    <div className="app-container">
      <ManagedColorsTable
        rows={5}
        columns={5}
        allowRepeatedColors={false}
        colors={COLORS_LIST}
      />
    </div>
  );
}

export default App;
