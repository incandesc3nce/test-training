function caesarCipher(str, key) {
  return str
    .split("")
    .map((char) => {
      if (char.match(/([a-z]|[A-Z])/i)) {
        const code = char.charCodeAt();
        const shift =
          code >= 65 && code <= 90 ? 65 : code >= 97 && code <= 122 ? 97 : 0;
        return String.fromCharCode(((code - shift + key) % 26) + shift);
      }

      return char;
    })
    .join("");
}

module.exports = caesarCipher;
