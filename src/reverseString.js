function reverseString(str) {
  if (!str || str === "") return "";

  return str.split("").reverse().join("");
}

module.exports = reverseString;
