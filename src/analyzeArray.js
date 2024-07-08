function analyzeArray(arr) {
  return {
    average: arr.reduce((total, curr) => total + curr, 0) / arr.length,
    min: arr.reduce((min, curr) => (min > curr ? curr : min), arr[0]),
    max: arr.reduce((max, curr) => (max < curr ? curr : max), arr[0]),
    length: arr.length,
  };
}

module.exports = analyzeArray;
