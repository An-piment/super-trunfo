import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../images/logo.svg';

class Card extends Component {
  generateStarRarity = (cardRare) => {
    if (cardRare === 'normal') return '⭐';
    if (cardRare === 'raro') return '⭐⭐';
    return '⭐⭐⭐';
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.props;

    const starRarity = this.generateStarRarity(cardRare);

    return (
      <div className="paddingCard">
        <div className="mainCard">
          <div className="cardName">
            <h1 className="title">{ starRarity }</h1>
            <h1 data-testid="name-card" className="title">{ cardName }</h1>
          </div>
          <img
            data-testid="image-card"
            className="pokeImage"
            src={ cardImage }
            alt={ cardName }
          />
          {!cardTrunfo ? <div />
            : (
              <>
                <img className="trunfoLogo" src={ logo } alt="Tryunfo Logo" />
                <h1 data-testid="trunfo-card" className="title">Super Trunfo</h1>
              </>
            )}
          <div className="cutter" />
          <div className="descriptionBox">
            <p data-testid="description-card">{ cardDescription }</p>
          </div>
          <div className="attrMainBox">
            <div className="attrBoxCard card1">
              <p>Atk.................................................</p>
              <p data-testid="attr1-card" className="attrValue">{ cardAttr1 }</p>
            </div>
            <div className="attrBoxCard card2">
              <p>Def.................................................</p>
              <p data-testid="attr2-card" className="attrValue">{ cardAttr2 }</p>
            </div>
            <div className="attrBoxCard card3">
              <p>Spd.................................................</p>
              <p data-testid="attr3-card" className="attrValue">{ cardAttr3 }</p>
            </div>
            <h1 className="cardRarity" data-testid="rare-card">{ cardRare }</h1>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
