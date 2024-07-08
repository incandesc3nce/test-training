const analyzeArray = require("../src/analyzeArray");

test("does correct analysis", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("does another correct analysis", () => {
  expect(analyzeArray([9, 5, 13, 17, 16, 19, 2, 7])).toStrictEqual({
    average: 11,
    min: 2,
    max: 19,
    length: 8,
  });
});

test("does yet another correct analysis", () => {
  expect(analyzeArray([1, 1, 2, 3, 5, 8, 13, 21])).toStrictEqual({
    average: 6.75,
    min: 1,
    max: 21,
    length: 8,
  });
});
