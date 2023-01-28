import React from "react";

export function Square({ value }) {
  console.log(value);
  return (
    <div className="square" style={{ backgroundColor: value }}>
    </div>
  );
}
