const reverseString = require("../src/reverseString");

test("returns empty string", () => {
  expect(reverseString("")).toBe("");
});

test("returns empty string when undefined", () => {
  expect(reverseString("")).toBe("");
});

test("returns single letter", () => {
  expect(reverseString("a")).toBe("a");
});

test("reverses string", () => {
  expect(reverseString("string")).toBe("gnirts");
});