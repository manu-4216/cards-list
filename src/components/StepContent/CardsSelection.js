import React, { Component } from 'react'
import cards from '../../fixtures/cards'

class CardsSelection extends Component {
  state = {
    cards: []
  }

  componentDidMount() {
    this.setState({
      cards
    })
  }

  render() {
    const { cards } = this.state

    return (
      <div>
        <div className="StepContent-title">2. Choose your card</div>
        <form>
          <label>Available cards:</label>
          <ul className="CardList">
            {cards.map(card => (
              <span key={card.name} className="CardItem">
                {card.name}
              </span>
            ))}
          </ul>
        </form>
      </div>
    )
  }
}

export default CardsSelection
