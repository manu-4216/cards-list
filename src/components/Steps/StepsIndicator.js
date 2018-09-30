import React from 'react'
import { StepsContext } from './index.js'
import './style.css'

const StepsIndicator = ({ nrSteps }) => (
  <StepsContext.Consumer>
    {context => {
      const getClass = (step, activeStep) => {
        const baseClass = 'StepIndicator-button'

        return step === activeStep ? baseClass + ' active' : baseClass
      }
      return [...Array(nrSteps)].map((item, index) => (
        <button
          className={getClass(index + 1, context.activeStep)}
          key={index}
          onClick={() => context.goToStep(index + 1)}
          disabled={index + 1 === context.activeStep}
        >
          {index + 1}
        </button>
      ))
    }}
  </StepsContext.Consumer>
)

export default StepsIndicator
