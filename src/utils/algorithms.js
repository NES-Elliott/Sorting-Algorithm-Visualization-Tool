// This function takes 4 values,
// animation determines the animation used while the function sorts
// animationSpeed determines the speed at which the function sorts (ms).
// primaryColor determines the color of dormant array bars
// secondaryColor determines the color of active array bars
export function mergeSort(animation, animationSpeed, primaryColor, secondaryColor) {
  for (let i = 0; i < animation.length; i++) {
    const arrayBars = document.getElementsByClassName('array__bar')
    const isColorChange = i % 3 !== 2

    if (isColorChange) {
      const [barOneIdx, barTwoIdx] = animation[i]
      const barOneStyle = arrayBars[barOneIdx].style
      const barTwoStyle = arrayBars[barTwoIdx].style
      const color = i % 3 === 0 ? secondaryColor : primaryColor

      setTimeout(() => {
        barOneStyle.backgroundColor = color
        barTwoStyle.backgroundColor = color
      }, i * animationSpeed)
    } else {
      setTimeout(() => {
        const [barOneIdx, newHeight] = animation[i]
        const barOneStyle = arrayBars[barOneIdx].style
        barOneStyle.height = `${newHeight}vh`
      }, i * animationSpeed)
    }
  }
}
