import {
  getRandomNumber,
  generateRandomColor,
  createMatrix,
  getItemsColorsCount,
  buildIdFromIndexes,
  extractIndexesFromId,
  areInvalidIndexes,
  pickColor,
  randomizeColorsFromList,
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

    test("generating random number with no params, result should be within 0-10000 limit", () => {
      const res = getRandomNumber();
      const isWithinLimit = res >= 0 && res <= 10000;

      expect(isWithinLimit).toBeTruthy();
    });

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
        const isColorFromList = colorsList.some((c) => c === color);
        expect(isColorFromList).toBeTruthy();
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

  describe("getItemsColorsCount tests", () => {
    test.each([
      [
        [
          [{ color: "blue" }, { color: "red" }],
          [{ color: "yellow" }, { color: "red" }],
          [{ color: "red" }, { color: "blue" }],
        ],
        { red: 3, blue: 2, yellow: 1 },
      ],

      [
        [
          [{ color: "blue" }, { color: "blue" }],
          [{ color: "blue" }, { color: "blue" }],
          [{ color: "blue" }, { color: "blue" }],
        ],
        { blue: 6 },
      ],
      [[[{ color: "blue" }]], { blue: 1 }],
    ])(
      "getting colors count of matrix: %s, returns count object: %s",
      (matrix, countObject) => {
        const res = getItemsColorsCount(matrix);
        const countedColors = Object.keys(res);

        const isSameCount = countedColors.some(
          (color) => res[color] === countObject[color]
        );

        expect(res.length).toBe(countObject.length);
        expect(isSameCount).toBeTruthy();
      }
    );
  });

  describe("buildIdFromIndexes tests", () => {
    test.each([
      [5, 10, "--", "5--10"],
      [1000, 5, "@", "1000@5"],
      [1, 1, "separate", "1separate1"],
    ])(
      "building id from i:%s, j:%s, and separator:%s, returns id:%s",
      (i, j, separator, res) => {
        expect(buildIdFromIndexes(i, j, separator)).toBe(res);
      }
    );

    test("building id from partial/undefined params returns undefined", () => {
      expect(buildIdFromIndexes(5, 3)).toBe(undefined);
      expect(buildIdFromIndexes(2)).toBe(undefined);
      expect(buildIdFromIndexes()).toBe(undefined);
    });
  });

  describe("extractIndexesFromId tests", () => {
    test.each([
      ["5--10", "--", [5, 10]],
      ["1000@5", "@", [1000, 5]],
      ["1separate1", "separate", [1, 1]],
    ])("extract indexes from id: %s, returns: %s", (id, separator, res) => {
      expect(extractIndexesFromId(id, separator)).toEqual(res);
    });

    test("extracting id from partial/undefined params returns undefined", () => {
      expect(extractIndexesFromId("1_24")).toBe(undefined);
      expect(extractIndexesFromId("")).toBe(undefined);
      expect(extractIndexesFromId(null)).toBe(undefined);
      expect(extractIndexesFromId()).toBe(undefined);
    });
  });

  describe("areInvalidIndexes tests", () => {
    test.each([
      [{ i: undefined, j: undefined, mat: null }],
      [{ i: 1, j: 1, mat: [[]] }],
      [{ i: "a", j: "b", mat: [] }],
      [
        {
          i: 9,
          j: 9,
          mat: [
            [{ color: "red" }, { color: "red" }],
            [{ color: "red" }, { color: "red" }],
          ],
        },
      ],
    ])(
      "checking if params:%s contains invalid indexes should return true",
      ({ i, j, mat }) => {
        expect(areInvalidIndexes({ i, j, mat })).toBeTruthy();
      }
    );

    test.each([
      [{ i: 0, j: 0, mat: [[{ color: "white" }]] }],
      [{ i: 1, j: 0, mat: [[{ color: "white" }], [{ color: "white" }]] }],
      [
        {
          i: 2,
          j: 1,
          mat: [
            [{ color: "white" }, { color: "blue" }],
            [{ color: "white" }, { color: "blue" }],
            [{ color: "white" }, { color: "blue" }],
          ],
        },
      ],
    ])(
      "checking if params:%s contains invalid indexes should return true",
      ({ i, j, mat }) => {
        expect(areInvalidIndexes({ i, j, mat })).toBeFalsy();
      }
    );
  });

  describe("pickColor tests", () => {
    const longColorsList = [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "purple",
      "pink",
      "brown",
      "gray",
      "black",
      "white",
      "beige",
      "maroon",
    ];

    test("picking color from a long colors list should return a different color than the initial one at least once", () => {
      const initialColor = longColorsList[0];
      const params = {
        prevColor: initialColor,
        allowRepeatedColors: true,
        colorsList: longColorsList,
      };

      const newColor1 = pickColor(params);
      const newColor2 = pickColor(params);
      const newColor3 = pickColor(params);
      const notAllSameColors =
        initialColor !== newColor1 ||
        initialColor !== newColor2 ||
        initialColor !== newColor3;

      expect(notAllSameColors).toBeTruthy();
    });

    test.each([
      ["red", ["red", "blue", "green", "yellow", "purple"]],
      ["green", ["red", "blue", "green"]],
      ["yellow", ["red", "yellow"]],
    ])(
      "picking color with allowRepeatedColors set to false, should return a different color than the previous one",
      (prevColor, colorsList) => {
        const newColor = pickColor({
          prevColor,
          allowRepeatedColors: false,
          colorsList,
        });

        expect(newColor).not.toBe(prevColor);
      }
    );

    test("picking color from list of one color and allowRepeatedColors set to false should repeat the prev color", () => {
      const initialColor = "blue";
      const params = {
        prevColor: initialColor,
        allowRepeatedColors: true,
        colorsList: [initialColor],
      };

      const newColor = pickColor(params);
      expect(newColor).toBe(initialColor);
    });
  });

  describe("randomizeColorsFromList tests", () => {
    test.each([
      [["red", "blue", "white", "green", "pink"], 3],
      [["red", "blue", "green"], 2],
      [["blue", "white"], 1],
    ])(
      "randomizing colors from list:%s, resulted colors should be from the colors in the list",
      (colorsList, colorsCount) => {
        const result = randomizeColorsFromList(colorsList, colorsCount);
        result.forEach((resultColor) => {
          const isColorFromList = colorsList.some((c) => c === resultColor);
          expect(isColorFromList).toBeTruthy();
        });
      }
    );

    test("randomizing colors with a count that greater/equal to the colorList length, returns the colors list provided", () => {
      const colorList = ["red", "green", "blue"];

      expect(randomizeColorsFromList(colorList, 10)).toEqual(colorList);
      expect(randomizeColorsFromList(colorList, 3)).toEqual(colorList);
    });

    test("randomizing colors providing 0 colors count returns empty colors list", () => {
      const colorList = ["red", "green", "blue"];

      expect(randomizeColorsFromList(colorList, 0)).toEqual([]);
    });

    test("randomizing colors providing empty colors list returns empty colors list", () => {
      const emptyList = [];

      expect(randomizeColorsFromList(emptyList, 5)).toEqual(emptyList);
    });
  });
});
