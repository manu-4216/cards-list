import React, { Component } from 'react'

class IntroForm extends Component {
  state = {
    employment: '',
    annualIncome: 0
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.employment !== this.state.employment ||
      prevState.annualIncome !== this.state.annualIncome
    ) {
      this.props.updateSharedState(this.state)
    }
  }

  render() {
    const { employment, annualIncome } = this.state

    return (
      <div>
        <div className="StepContent-title">1. Basic Information</div>
        <form>
          <label>
            Employment Status:
            <select
              value={employment}
              onChange={this.handleChange('employment')}
            >
              <option value="employed">Employed</option>
              <option value="part_time">Part Time Employed</option>
              <option value="student">Student</option>
            </select>
          </label>

          <label>
            Annual Income (£):
            <input
              type="text"
              value={annualIncome}
              onChange={this.handleChange('annualIncome')}
            />
          </label>
        </form>
      </div>
    )
  }
}

export default IntroForm
