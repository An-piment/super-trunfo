import './App.css';
import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Search from './components/Search';
import logo from './images/logo.svg';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    nameFilter: '',
    rarityFilter: 'todas',
    trunfoFilter: false,
    allCards: [],
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  checkStringInputs = () => {
    const { cardName, cardDescription, cardImage } = this.state;
    return (cardName !== ''
    && cardDescription !== ''
    && cardImage !== '');
  };

  checkStatusValues = (stats) => {
    const maxStats = 90;
    return (parseInt(stats, 10) >= 0 && parseInt(stats, 10) <= maxStats);
  };

  checkStats = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const maxTotalStats = 210;
    const sumStats = parseInt(cardAttr1, 10)
    + parseInt(cardAttr2, 10)
    + parseInt(cardAttr3, 10);

    return (this.checkStatusValues(cardAttr1)
      && this.checkStatusValues(cardAttr2)
      && this.checkStatusValues(cardAttr3)
      && (sumStats <= maxTotalStats));
  };

  checkButtonStatus = () => (this.checkStats() && this.checkStringInputs());

  checkTrunfo = () => {
    const { allCards } = this.state;
    return allCards.some(({ cardTrunfo }) => cardTrunfo);
  };

  setTrunfo = () => this.setState({
    hasTrunfo: this.checkTrunfo(),
  });

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.state;

    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState((prevState) => {
      const { allCards } = prevState;
      return {
        cardName: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        allCards: [...allCards, newCard],
      };
    }, () => this.setTrunfo());
  };

  deleteCard = (index) => {
    const { allCards } = this.state;
    this.setState({
      allCards: allCards.filter((_, i) => i !== index),
    }, () => this.setTrunfo());
  };

  nameToFilter = (cardArray, field, toFilter) => cardArray
    .filter((card) => card[field]
      .toLowerCase()
      .includes(toFilter.toLowerCase()));

  filterElements = () => {
    const { nameFilter, rarityFilter, allCards, trunfoFilter } = this.state;

    if (trunfoFilter) {
      return allCards.filter(({ cardTrunfo }) => cardTrunfo);
    }

    let filteredArray = allCards;

    if (nameFilter !== '') {
      filteredArray = this.nameToFilter(filteredArray, 'cardName', nameFilter);
    }

    if (rarityFilter !== 'todas') {
      filteredArray = filteredArray.filter(({ cardRare }) => cardRare === rarityFilter);
    }
    return filteredArray;
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
      cardTrunfo,
      hasTrunfo,
      nameFilter,
      allCards,
      rarityFilter,
      trunfoFilter,
    } = this.state;

    const isDisabled = this.checkButtonStatus();
    const isSearchDisabled = trunfoFilter;
    const filteredCards = this.filterElements();

    return (
      <>
        <img className="mainLogo" src={ logo } alt="Logo" />
        <section className="formSection">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            onInputChange={ this.onInputChange }
            isSaveButtonDisabled={ !isDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <div className="preview">
            <h1 className="cardTitle">PRÉ-VISUALIZAÇÃO</h1>
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </div>
        </section>
        <section>
          <Search
            nameFilter={ nameFilter }
            rarityFilter={ rarityFilter }
            isSearchDisabled={ isSearchDisabled }
            onInputChange={ this.onInputChange }
          />
          <div className="displayCards">
            {filteredCards.map((card, index) => (
              <div className="cards" key={ index }>
                <Card
                  cardName={ card.cardName }
                  cardDescription={ card.cardDescription }
                  cardAttr1={ card.cardAttr1 }
                  cardAttr2={ card.cardAttr2 }
                  cardAttr3={ card.cardAttr3 }
                  cardImage={ card.cardImage }
                  cardRare={ card.cardRare }
                  cardTrunfo={ card.cardTrunfo }
                />
                <button
                  type="button"
                  onClick={ () => this.deleteCard(allCards.indexOf(card)) }
                  className="btn btn-danger"
                  data-testid="delete-button"
                >
                  Excluir
                </button>
              </div>
            ))}
          </div>
        </section>
      </>
    );
  }
}

export default App;
