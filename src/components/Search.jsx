import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  render() {
    const {
      nameFilter,
      rarityFilter,
      trunfoFilter,
      onInputChange,
      isSearchDisabled } = this.props;

    return (
      <section className="searchBox">
        <p className="filterText">Filtro de Busca</p>
        <div className="input-group attrBox">
          <div className="input-group-text">Carta</div>
          <input
            type="text"
            className="form-control"
            name="nameFilter"
            id="nameFilter"
            placeholder="Digite a carta"
            data-testid="name-filter"
            disabled={ isSearchDisabled }
            onChange={ onInputChange }
            value={ nameFilter }
          />
        </div>
        <div>
          <select
            className="form-select"
            aria-label="Default select example"
            id="rarity"
            name="rarityFilter"
            data-testid="rare-filter"
            value={ rarityFilter }
            disabled={ isSearchDisabled }
            onChange={ onInputChange }
          >
            <option defaultValue value="todas">Todas</option>
            <option value="normal">⭐</option>
            <option value="raro">⭐⭐</option>
            <option value="muito raro">⭐⭐⭐</option>
          </select>
        </div>
        <div className="form-check">
          <label className="form-check-label trunfoLabel" htmlFor="trunfo">
            Super Trunfo
            <input
              className="form-check-input"
              type="checkbox"
              name="trunfoFilter"
              data-testid="trunfo-filter"
              checked={ trunfoFilter }
              onChange={ onInputChange }
            />
          </label>
        </div>
      </section>
    );
  }
}

Search.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  rarityFilter: PropTypes.string.isRequired,
  trunfoFilter: PropTypes.bool.isRequired,
  isSearchDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Search;
