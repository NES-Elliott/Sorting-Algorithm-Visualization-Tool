// This function takes 1 value
// array is the array of integers we are sorting.
export function mergeSortAnimation(array) {
  const animation = []
  if (array.length <= 1) return array
  const auxiliaryArray = array.slice()
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animation)
  return animation
}

// This function takes 5 valus
function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animation) {
  if (startIdx === endIdx) return
  const middleIdx = Math.floor((startIdx + endIdx) / 2)
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animation)
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animation)
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animation)
}

// This function takes 6 values
function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animation) {
  let k = startIdx
  let i = startIdx
  let j = middleIdx + 1
  while (i <= middleIdx && j <= endIdx) {
    // These are the values that we're comparing we push them once
    // to change their color.
    animation.push([i, j])
    // These are the values that we're comparing we push them a second
    // time to revert their color.
    animation.push([i, j])
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animation.push([k, auxiliaryArray[i]])
      mainArray[k++] = auxiliaryArray[i++]
    } else {
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animation.push([k, auxiliaryArray[j]])
      mainArray[k++] = auxiliaryArray[j++]
    }
  }
  while (i <= middleIdx) {
    // These are the values that we're comparing we push them once
    // to change their color.
    animation.push([i, i])
    // These are the values that we're comparing we push them a second
    // time to revert their color.
    animation.push([i, i])
    // We overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animation.push([k, auxiliaryArray[i]])
    mainArray[k++] = auxiliaryArray[i++]
  }
  while (j <= endIdx) {
    // These are the values that we're comparing we push them once
    // to change their color.
    animation.push([j, j])
    // These are the values that we're comparing we push them a second
    // time to revert their color.
    animation.push([j, j])
    // We overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animation.push([k, auxiliaryArray[j]])
    mainArray[k++] = auxiliaryArray[j++]
  }
}
