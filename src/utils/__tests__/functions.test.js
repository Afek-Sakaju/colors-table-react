import {
  getRandomNumber,
  generateRandomColor,
  createMatrix,
} from "../functions";
import { DEFAULT_MATRIX_PROPERTIES } from "../consts";

describe("functions tests", () => {
  describe("getRandomNumber tests", () => {
    test.each([
      [0, 1500],
      [0, 10],
      [0, 1],
      [0, 0],
    ])(
      "generating random number from %s to %s, result should be within the max-min limit",
      (min, max) => {
        const res = getRandomNumber(min, max);
        const isWithinLimit = res >= min && res <= max;

        expect(isWithinLimit).toBeTruthy();
      }
    );

    test("generating four random numbers from 0-20000, numbers shouldn't be all equal", () => {
      // Could write in other way, but i think this way its more simple to understand quickly
      const num1 = getRandomNumber(0, 20000);
      const num2 = getRandomNumber(0, 20000);
      const num3 = getRandomNumber(0, 20000);
      const num4 = getRandomNumber(0, 20000);
      const areAllEqual = num1 === num2 && num2 === num3 && num3 === num4;

      expect(areAllEqual).toBeFalsy();
    });
  });

  describe("generateRandomColor tests", () => {
    test.each([[["red", "blue", "green"]], [["blue", "white"]], [["red"]]])(
      "generating random color from %s colors list, result should be one of the colors in the list",
      (colorsList) => {
        const color = generateRandomColor(colorsList);
        const isColorInList = colorsList.some((c) => c === color);
        expect(isColorInList).toBeTruthy();
      }
    );

    test("generating random color from empty list should return 'black'", () => {
      const color = generateRandomColor([]);
      expect(color).toBe("black");
    });
  });

  describe("createMatrix tests", () => {
    test.each([
      [{ rows: 20, columns: 20, colorsList: ["red", "yellow", "blue"] }],
      [
        {
          rows: 10,
          columns: 2,
          colorsList: ["red", "yellow", "blue", "white", "orange"],
        },
      ],
    ])(
      "creating matrix using %s, should return the rows/columns count as provided & matrix cells colors should be from the colorsList",
      (matrixProperties) => {
        const matrix = createMatrix(matrixProperties);
        const matrixRowsCount = matrix?.length;
        const matrixColumnsCount = matrix?.[0]?.length;
        const providedRowsCount = matrixProperties.rows;
        const providedColumnsCount = matrixProperties.columns;

        let allColorsFromList = true;
        matrix.forEach((row) => {
          row.forEach((data) => {
            const isColorFromList = matrixProperties.colorsList.some(
              (c) => c === data.color
            );
            if (!isColorFromList) allColorsFromList = false;
          });
        });

        expect(matrixRowsCount).toBe(providedRowsCount);
        expect(matrixColumnsCount).toBe(providedColumnsCount);
        expect(allColorsFromList).toBeTruthy();
      }
    );

    test("passing empty object param should return default matrix", () => {
      const matrix = createMatrix({});
      const matrixRowsCount = matrix?.length;
      const matrixColumnsCount = matrix?.[0]?.length;
      const defaultRowsCount = DEFAULT_MATRIX_PROPERTIES.rows;
      const defaultColumnsCount = DEFAULT_MATRIX_PROPERTIES.columns;

      let allColorsFromList = true;
      matrix.forEach((row) => {
        row.forEach((data) => {
          const isColorFromList = DEFAULT_MATRIX_PROPERTIES.colorsList.some(
            (c) => c === data.color
          );
          if (!isColorFromList) allColorsFromList = false;
        });
      });

      expect(matrixRowsCount).toBe(defaultRowsCount);
      expect(matrixColumnsCount).toBe(defaultColumnsCount);
      expect(allColorsFromList).toBeTruthy();
    });
  });
});
