
// You should implement your task here.

module.exports = function towelSort (matrix = []) {

  if (!matrix.length) return [];

  return matrix.reduce(function(a, b, i) {
    return i % 2 ? a.concat(b.reverse()) : a.concat(b)
  })
}