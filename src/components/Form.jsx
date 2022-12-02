import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
      cardTrunfo,
    } = this.props;
    return (
      <form>
        <h1 className="cardTitle">Adicione Nova Carta</h1>
        <div>
          <label htmlFor="nameInput" className="form-label inputBox">
            Nome
            <input
              type="text"
              className="form-control"
              id="cardName"
              name="cardName"
              maxLength="13"
              placeholder="Nome da Carta"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="descriptionInput" className="form-label inputBox">
            Descrição
            <textarea
              className="form-control textareaBox"
              id="descriptionInput"
              name="cardDescription"
              placeholder="Descrição da Carta"
              data-testid="description-input"
              maxLength={ 330 }
              row="3"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <div className="input-group attrBox">
            <div className="input-group-text attr">Atk</div>
            <input
              type="number"
              className="form-control"
              name="cardAttr1"
              id="attr1"
              placeholder="0"
              min="0"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </div>
        </div>

        <div>
          <div className="input-group attrBox">
            <div className="input-group-text attr">Def</div>
            <input
              type="number"
              className="form-control attr"
              id="attr2"
              name="cardAttr2"
              placeholder="0"
              min="0"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </div>
        </div>

        <div>
          <div className="input-group attrBox">
            <div className="input-group-text attr">Spd</div>
            <input
              type="number"
              className="form-control"
              id="attr3"
              placeholder="0"
              name="cardAttr3"
              min="0"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </div>
        </div>

        <div>
          <label htmlFor="nameInput" className="form-label inputBox">
            Imagem
            <input
              type="text"
              className="form-control"
              id="imageInput"
              name="cardImage"
              placeholder="Link da Imagem"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="rarity" className="form-label">
            Raridade
            <select
              data-testid="rare-input"
              className="form-select"
              aria-label="Default select example"
              id="rarity"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option defaultValue value="normal">⭐</option>
              <option value="raro">⭐⭐</option>
              <option value="muito raro">⭐⭐⭐</option>
            </select>
          </label>
        </div>

        <div className="rarityTrunfo">
          { hasTrunfo
            ? <h1 className="hasTrunfo">Você já tem um Super Trunfo em seu baralho</h1>
            : (
              <div className="form-check">
                <label className="form-check-label" htmlFor="trunfo">
                  Super Trunfo
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="trunfo"
                    name="cardTrunfo"
                    data-testid="trunfo-input"
                    checked={ cardTrunfo }
                    onChange={ onInputChange }
                  />
                </label>
              </div>
            )}

          <button
            type="button"
            data-testid="save-button"
            className="btn btn-success"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
