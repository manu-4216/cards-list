import React, { Component } from 'react'
import './style.css'
import Steps from '../Steps'
import Step from '../Steps/Step'

class Main extends Component {
  render() {
    return (
      <main className="Main">
        <h2>Get your credit card in 3 quick steps:</h2>
        <Steps>
          <Step>1. Basic Information</Step>
          <Step>2. Choose your card(s)</Step>
          <Step>3. Finish your order</Step>
        </Steps>
      </main>
    )
  }
}

export default Main