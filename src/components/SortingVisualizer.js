import React, { useState } from 'react'
import { resetArray } from '../utils/functions'

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
        <button className="" onClick={() => setArray(resetArray(300, 5, 700))}>Generate New Array</button>
        <button className="" onClick={() => {}}>Merge Sort</button>
        <button className="" onClick={() => {}}>Quick Sort</button>
        <button className="" onClick={() => {}}>Heap Sort</button>
        <button className="" onClick={() => {}}>Bubble Sort</button>
      </div>
    </div>
  )
}


// UTILS

