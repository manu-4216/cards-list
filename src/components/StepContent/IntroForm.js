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
      <p>
        <div className="StepContent-title">1. Basic Information</div>
        <form>
          <label>
            Employment Status:
            <select value={employement} onChange={this.handleEmploymentChange}>
              <option value="employed" selected={employement === 'employed'}>
                Employed
              </option>
              <option value="part_time" selected={employement === 'part_time'}>
                Part Time Employed
              </option>
              <option value="student" selected={employement === 'student'}>
                Student
              </option>
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
      </p>
    )
  }
}

export default IntroForm
