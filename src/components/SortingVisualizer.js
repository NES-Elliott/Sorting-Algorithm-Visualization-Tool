import React, { useState, useEffect } from 'react'
import { resetArray } from '../utils/functions'
import { mergeSort } from '../utils/mergeSort'
import { mergeSortAnimation } from '../utils/mergeAnimation'


export const SortingVisualizer = () => {
  const [array, setArray] = useState([])

  const intArrayBars = ((window.innerWidth / 4) * 0.7)
  const arrayMax = 90
  const arrayMin = 1
  const animationSpeed = 2
  const primaryColor = 'pink'
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
              style={{height: `${value}vh`}}></div>
          ))}
      </div>
      <div className="btn__container">
        <button className="btn" onClick={() => setArray(resetArray(intArrayBars, arrayMin, arrayMax))}>Generate New Array</button>
        <button className="btn" onClick={() => mergeSort(mergeSortAnimation(array), animationSpeed, primaryColor, secondaryColor)}>Merge Sort</button>
      </div>
    </div>
  )
}
