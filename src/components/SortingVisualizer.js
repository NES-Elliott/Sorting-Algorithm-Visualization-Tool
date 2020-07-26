import React from 'react'

const intArrays = 300

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
    for (let i = 0; i < intArrays; i++) {
      // array.push(randomIntFromInteraval(5,700))
      array.push(Math.floor(Math.random() * (700 - 5 + 1) + 5))
    }
    this.setState({array})
  }
  // Sorting Algorithms

  render() {
    const { array } = this.state

    return (
      <>
        {array.map((value, idx) => (
          <div className="array-bar" key={idx}>
            {value}
          </div>
        ))}
      </>
    )
  }
}

// mergeSort() {
    
//   for (let i = 0;)
// }