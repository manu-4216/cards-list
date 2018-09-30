import React from 'react'
import { StepsContext } from './index.js'
import './style.css'

const Step = ({ children, step, nrSteps }) => (
  <StepsContext.Consumer>
    {context => (
      <section className={context.activeStep !== step ? 'hidden' : ''}>
        <p>{children}</p>

        <button
          className={step === 1 ? 'hidden' : 'Step-button'}
          style={{ marginRight: '1em' }}
          onClick={context.onPrevious}
        >
          Previous
        </button>
        <button className="Step-button" onClick={context.onNext}>
          {context.activeStep === nrSteps ? 'Finish' : 'Next'}
        </button>
      </section>
    )}
  </StepsContext.Consumer>
)

export default Step