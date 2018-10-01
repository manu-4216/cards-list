import React, { Component } from 'react'
import './style.css'
import Steps from '../Steps'
import Step from '../Steps/Step'
import { IntroForm, CardsSelection, OrderCard } from '../StepContent'

class Main extends Component {
  state = {
    sharedState: {}
  }

  updateSharedState = stateToShare => {
    this.setState({
      sharedState: { ...this.state.sharedState, ...stateToShare }
    })
  }

  render() {
    const { sharedState } = this.state

    return (
      <main className="Main">
        <h2>Get your credit card in 3 quick steps:</h2>
        <Steps>
          <Step>
            <IntroForm
              updateSharedState={this.updateSharedState}
              sharedState={sharedState}
            />
          </Step>
          <Step>
            <CardsSelection
              updateSharedState={this.updateSharedState}
              sharedState={sharedState}
            />
          </Step>
          <Step>
            <OrderCard sharedState={sharedState} />
          </Step>
        </Steps>
      </main>
    )
  }
}

export default Main
