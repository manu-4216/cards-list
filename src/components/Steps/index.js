import React, { Component, Fragment } from 'react'
import StepsIndicator from './StepsIndicator'
import './style.css'

const StepsContext = React.createContext()

class StepsProvider extends Component {
  state = {
    activeStep: 1
  }

  onNext = () => {
    this.setState({ activeStep: this.state.activeStep + 1 })
  }

  onPrevious = () => {
    if (this.state.activeStep > 0) {
      this.setState({ activeStep: this.state.activeStep - 1 })
    }
  }

  goToStep = step => {
    this.setState({ activeStep: step })
  }

  render() {
    const { children } = this.props
    return (
      <StepsContext.Provider
        value={{
          activeStep: this.state.activeStep,
          onNext: this.onNext,
          onPrevious: this.onPrevious,
          goToStep: this.goToStep
        }}
      >
        {children}
      </StepsContext.Provider>
    )
  }
}

const Steps = ({ children }) => (
  <StepsProvider>
    <Fragment>
      <StepsIndicator nrSteps={children.length} />
      {children.map((child, index) =>
        // For each children (Step), pass extra props to it
        React.cloneElement(child, {
          step: index + 1,
          key: index + 1,
          nrSteps: children.length
        })
      )}
    </Fragment>
  </StepsProvider>
)

export { StepsContext }
export default Steps
