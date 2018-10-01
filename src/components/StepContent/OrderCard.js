import React, { Component } from 'react'

class OrderCard extends Component {
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
        <div className="StepContent-title">3. Finish your order</div>
        <form>
          <label>
            First name:
            <input
              type="text"
              onChange={this.handleAnnualIncomeChange}
              value={annualIncome}
            />
          </label>

          <label>
            Last name:
            <input
              type="text"
              onChange={this.handleAnnualIncomeChange}
              value={annualIncome}
            />
          </label>

          <label>
            Date of birth:
            <input
              type="text"
              onChange={this.handleAnnualIncomeChange}
              value={annualIncome}
            />
          </label>

          <label>
            Postcode:
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

export default OrderCard
