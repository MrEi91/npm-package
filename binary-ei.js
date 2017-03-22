module.exports = function(search, array) {
  let min = 0
  let max = array.length - 1

  while (min <= max) {
    let midValue = Math.floor((min + max) / 2)
    if (array[midValue] < search) {
      min = midValue + 1
    } else if (array[midValue] > search) {
      max = midValue - 1
    } else {
      return midValue
    }
  }
  return -1
}
