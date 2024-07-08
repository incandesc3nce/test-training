const capitalize = require('../src/capitalize');


test('returns empty string', () => {
  expect(capitalize('')).toBe('');
});

test('return empty string when undefined', () => {
  expect(capitalize()).toBe('');
})

test('capitalizes single letter', () => {
  expect(capitalize('a')).toBe('A');
});

test('capitalizes first letter of word', () => {
  expect(capitalize('word')).toBe('Word');
});

test('capitalizes first letter of first word', () => {
  expect(capitalize('two words')).toBe('Two words');
});