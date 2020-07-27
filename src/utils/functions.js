// This function takes 3 values,
// intArrayBars determines how many integers are pushed to the array
// min determines the lower end of the range of integers
// max determines the upper end of the range of integers
export function resetArray(intArrayBars, min, max) {
  const array = []
  for (let i = 0; i < intArrayBars; i++) {
    array.push(Math.floor(Math.random() * (max - min + 1) + min))
  }
  return array
}
