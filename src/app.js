/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import ReactDOM from 'react-dom'
import './app.scss'

class Hello extends React.Component {
  render() {
    return <div className='hello'>Hello world!!</div>
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
