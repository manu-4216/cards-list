import React from 'react'
import { StepsContext } from './index.js'

const Step = ({ children, step, nrSteps }) => (
  <StepsContext.Consumer>
    {context => (
      <section className={context.activeStep !== step ? 'hidden' : ''}>
        <div className="Step-content">{children}</div>

        <div>
          <button
            className={step === 1 ? 'hidden' : 'Step-button'}
            style={{ marginRight: '1em' }}
            onClick={context.onPrevious}
          >
            Previous
          </button>
          {context.activeStep !== nrSteps ? (
            <button className="Step-button" onClick={context.onNext}>
              Next
            </button>
          ) : (
            <button className="Step-button">Finish</button>
          )}
        </div>
      </section>
    )}
  </StepsContext.Consumer>
)

export default Step
