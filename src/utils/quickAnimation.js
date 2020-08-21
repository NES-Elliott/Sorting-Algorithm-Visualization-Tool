export function quickSortAnimation(array) {
  const animation = []
  if (array.length <= 1) return array
  const auxiliaryArray = array.slice()
  const itemPivot = quickSortPivot(array)
  console.log(itemPivot)
  console.log(array)
  console.log(itemLeft(array, itemPivot))
}

// Selecting our pivot with the Median-Of-Three method
function quickSortPivot(array) {
  const medThreeArray = []
  const medFirst = array[0]
  const medSecond = array[Math.round(array.length / 2)]
  const medThird = array[(array.length - 1)]
  medThreeArray.push(medFirst, medSecond, medThird)
  medThreeArray.sort()
  const itemPivot = medThreeArray[1]
  console.log(medThreeArray)
  return itemPivot
}

function doQuick(mainArray, itemFromLeft, itemFromRight) {



}


function itemLeft(array, itemPivot) {
  let itemFromLeft
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= itemPivot) {
      itemFromLeft = array[i]
      return itemFromLeft
    }
  }
}













