const caesarCipher = require("../src/caesarCipher");

test("shifts chars", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("keeps case", () => {
  expect(caesarCipher("aBCdE", 5)).toBe("fGHiJ");
});

test("wraps from z to a", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("ignores punctuation", () => {
  expect(caesarCipher("hey! what's up?", 5)).toBe("mjd! bmfy'x zu?");
});
