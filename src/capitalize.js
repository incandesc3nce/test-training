function capitalize(str) {
  if (!str || str === '') return '';
  let arr = str.split('');
  arr[0] = arr[0].toUpperCase();
  return arr.join('');
}

module.exports = capitalize;