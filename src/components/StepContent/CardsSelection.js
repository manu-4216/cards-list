import React, { Component } from 'react'
import cards from '../../fixtures/cards'

class CardsSelection extends Component {
  state = {
    cards: [],
    selectedCards: []
  }

  componentDidMount() {
    this.setState({
      cards
    })
  }

  handleSelect = id => () => {
    const { selectedCards } = this.state
    const cardIsAlreadySelected = selectedCards.includes(id)

    if (cardIsAlreadySelected) {
      this.setState({
        selectedCards: selectedCards.filter(cardId => {
          return cardId !== id
        })
      })
    } else {
      this.setState({
        selectedCards: [...selectedCards, id]
      })
    }
  }

  getTotalCredit = () => {
    const { cards, selectedCards } = this.state

    return cards
      .filter(card => selectedCards.includes(card.id))
      .reduce((acc, curr) => acc + curr.creditAvailable, 0)
  }

  render() {
    const { cards, selectedCards } = this.state

    const getClass = selected => {
      const baseClass = 'CardItem'

      return selected ? baseClass + ' selected' : baseClass
    }

    return (
      <div>
        <div className="StepContent-title">2. Choose your card</div>
        <form>
          <label>Available cards:</label>
          <ul className="CardList">
            {cards.map(card => (
              <span
                key={card.id}
                className={getClass(selectedCards.includes(card.id))}
                onClick={this.handleSelect(card.id)}
              >
                <div className="CardItem-title">{card.name}</div>
                <div className="CardItem-details">
                  <div>Apr: {card.apr}%</div>
                  <div>
                    Balance Transfer Offer Duration:{' '}
                    {card.balTransferDurationMonths} months
                  </div>
                  <div>
                    Purchase Offer Duration: {card.purchaseDurationMonths}{' '}
                    months
                  </div>
                  <div>Credit Available: {card.creditAvailable}£</div>
                </div>
              </span>
            ))}
            {selectedCards.length > 0 && (
              <div className="CardList-selection-result">
                <div>Cards selected: {selectedCards.length}</div>
                <div>Total Credit Available: {this.getTotalCredit()}</div>
              </div>
            )}
          </ul>
        </form>
      </div>
    )
  }
}

export default CardsSelection
