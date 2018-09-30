import React, { Component } from 'react'
import './style.css'
import Main from '../Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <span className="App-title-part1">Crazy</span>
            <span className="App-title-part2">Cards</span>
          </h1>
        </header>

        <Main />
      </div>
    )
  }
}

export default App
