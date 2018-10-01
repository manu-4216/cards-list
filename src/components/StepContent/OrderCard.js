import React, { Component } from 'react'

class OrderCard extends Component {
  state = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    postcode: ''
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  render() {
    const { firstName, lastName, dateOfBirth, postcode } = this.state

    return (
      <div>
        <div className="StepContent-title">3. Finish your order</div>
        <form>
          <div className="Group-form">
            <label>
              First name:
              <input
                type="text"
                value={firstName}
                onChange={this.handleChange('firstName')}
              />
            </label>

            <label>
              Last name:
              <input
                type="text"
                value={lastName}
                onChange={this.handleChange('lastName')}
              />
            </label>
          </div>

          <div className="Group-form">
            <label>
              Date of birth:
              <input
                type="text"
                value={dateOfBirth}
                onChange={this.handleChange('dateOfBirth')}
              />
            </label>

            <label>
              Postcode:
              <input
                type="text"
                value={postcode}
                onChange={this.handleChange('postcode')}
              />
            </label>
          </div>
        </form>
      </div>
    )
  }
}

export default OrderCard
