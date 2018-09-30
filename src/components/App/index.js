import React, { Component } from 'react'
import './style.css'
import Main from '../Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Crazy Cards</h1>
        </header>

        <Main />
      </div>
    )
  }
}

export default App
