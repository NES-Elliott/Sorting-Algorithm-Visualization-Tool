import React from 'react'

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      array: []
    }
  }

  componentDidMount() {
    this.resetArray()
  }

  resetArray() {
    const array = []
    for (let i = 0; i < 100; i++) {
      array.push(randIntFromInterval(5,1000))
    }
    this.setState({array})
  }
  // Sorting Algorithms
  // mergeSort() {}

  render() {
    const { array } = this.state

    return (
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{height: `${value}px`}}></div>
        ))}
      </div>
    )
  }
}

function randIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
