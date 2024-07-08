const calculator = require("../src/calculator");

test("adds arguments", () => {
  expect(calculator(2, 3, "+")).toBe(5);
});

test("subtracts arguments", () => {
  expect(calculator(10, 3, "-")).toBe(7);
});

test("multiplies arguments", () => {
  expect(calculator(5, 8, "*")).toBe(40);
});

test("divides arguments", () => {
  expect(calculator(15, 3, "/")).toBeCloseTo(5);
});

test("division by 0 throws error", () => {
  expect(() => calculator(5, 0, "/")).toThrow(Error);
});

test("throws error when one of the arguments is undefined", () => {
  expect(() => calculator(undefined, undefined, undefined)).toThrow(Error);
});

test("throws error when arguments are NaN", () => {
  expect(() => calculator("a", "b", "+")).toThrow(Error);
});

test("throws error when operator doesn't match", () => {
  expect(() => calculator(1, 2, "wrong")).toThrow(Error);
});

test("handles arguments as string with numbers", () => {
  expect(calculator("5", "5", "+")).toBe(10);
});
