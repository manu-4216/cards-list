import React, { Component } from 'react'

class IntroForm extends Component {
  state = {
    employement: '',
    annualIncome: ''
  }

  handleEmploymentChange = event => {
    this.setState({
      employement: event.target.value
    })
  }

  handleAnnualIncomeChange = event => {
    this.setState({
      annualIncome: event.target.value
    })
  }

  render() {
    const { employement, annualIncome } = this.state

    return (
      <div>
        <div className="StepContent-title">1. Basic Information</div>
        <form>
          <label>
            Employment Status:
            <select value={employement} onChange={this.handleEmploymentChange}>
              <option value="employed">Employed</option>
              <option value="part_time">Part Time Employed</option>
              <option value="student">Student</option>
            </select>
          </label>

          <label>
            Annual Income (£):
            <input
              type="text"
              onChange={this.handleAnnualIncomeChange}
              value={annualIncome}
            />
          </label>
        </form>
      </div>
    )
  }
}

export default IntroForm
