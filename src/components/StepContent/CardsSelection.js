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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedCards.length !== this.state.selectedCards.length) {
      this.props.updateSharedState(this.state)
    }
  }

  getEligible = card => {
    const { sharedState } = this.props
    let allowed = true

    card.restrictions.forEach(restriction => {
      switch (restriction.operator) {
        case 'EQ':
          if (sharedState[restriction.field] !== restriction.value) {
            allowed = false
          }
          break
        case 'GT':
          if ((sharedState[restriction.field] || 0) < +restriction.value) {
            allowed = false
          }
          break
      }
    })

    return allowed
  }

  render() {
    const { cards, selectedCards } = this.state

    const getClass = selected => {
      const baseClass = 'CardItem'

      return selected ? baseClass + ' selected' : baseClass
    }

    // Get some random card colors with gradient
    const getBackground = id => {
      return {
        background: `linear-gradient(135deg, rgb(164, 186, ${100 +
          50 * id}) 0%, rgb(206, 216, ${120 + 50 * id}) 100%)`
      }
    }

    return (
      <div>
        <div className="StepContent-title">2. Choose your card</div>
        <form>
          <label>Select one or more cards:</label>
          <ul className="CardList">
            {cards.filter(this.getEligible.bind(this)).map(card => (
              <span
                key={card.id}
                className={getClass(selectedCards.includes(card.id))}
                onClick={this.handleSelect(card.id)}
                style={getBackground(card.id)}
              >
                <div className="CardItem-title">{card.name}</div>
                <div className="CardItem-details">
                  <li>Apr: {card.apr}%</li>
                  <li>
                    Balance Transfer Offer Duration:{' '}
                    {card.balTransferDurationMonths} months
                  </li>
                  <li>
                    Purchase Offer Duration: {card.purchaseDurationMonths}{' '}
                    months
                  </li>
                  <li>Credit Available: {card.creditAvailable}£</li>
                </div>
              </span>
            ))}
          </ul>
          {selectedCards.length > 0 && (
            <div className="CardList-selection-result">
              <div>Cards selected: {selectedCards.length}</div>
              <div>Total Credit Available: {this.getTotalCredit()}</div>
            </div>
          )}
        </form>
      </div>
    )
  }
}

export default CardsSelection
