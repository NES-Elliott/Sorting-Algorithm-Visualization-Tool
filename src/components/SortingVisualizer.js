import React, { useState, useEffect } from 'react'
import { resetArray } from '../utils/functions'
import { mergeSort } from '../utils/algorithms'
import { mergeSortAnimation } from '../utils/animations'

export const SortingVisualizer = () => {
  const [array, setArray] = useState([])

  const intArrayBars = 300
  const arrayMax = 5
  const arrayMin = 700
  const animationSpeed = 3
  const primaryColor = 'cyan'
  const secondaryColor = 'orange'

  useEffect(() => {
    setArray(resetArray(intArrayBars, arrayMin, arrayMax))
  }, [])

  return (
    <div className="container">
      <div className="array__container">
        {array.map((value, idx) => (
            <div
              className="array__bar"
              key={idx}
              style={{height: `${value}px`}}></div>
          ))}
      </div>
      <div className="btn__container">
        <button className="" onClick={() => setArray(resetArray(intArrayBars, arrayMin, arrayMax))}>Generate New Array</button>
        <button className="" onClick={() => mergeSort(mergeSortAnimation(array), animationSpeed, primaryColor, secondaryColor)}>Merge Sort</button>
        <button className="" onClick={() => {}}>Quick Sort</button>
        <button className="" onClick={() => {}}>Heap Sort</button>
        <button className="" onClick={() => {}}>Bubble Sort</button>
      </div>
    </div>
  )
}
