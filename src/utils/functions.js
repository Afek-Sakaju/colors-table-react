export const createMatrix = (rows, columns, value = null) => {
  return Array(rows).fill(Array(columns).fill(value));
};
