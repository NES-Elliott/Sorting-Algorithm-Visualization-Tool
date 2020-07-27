import React, { useState } from 'react'
import { getMergeSortAnimations } from '../utils/algorithms'

export const SortingVisualizer = () => {
  const [array, setArray] = useState([])

  return (
    <div className="container">
      <div className="array__container">
        {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{height: `${value}px`}}></div>
          ))}
      </div>
      <div className="btn__container">
        <button className="" onClick={() => {}}>Generate New Array</button>
        <button className="" onClick={() => {}}>Merge Sort</button>
        <button className="" onClick={() => {}}>Quick Sort</button>
        <button className="" onClick={() => {}}>Heap Sort</button>
        <button className="" onClick={() => {}}>Bubble Sort</button>
      </div>
    </div>
  )
}


// UTILS
function randIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
