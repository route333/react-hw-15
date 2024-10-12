import React, { Component } from 'react';

class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  handleSearchValue = (event) => {
    this.setState({ searchValue: event.target.value.toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchValue);
  };

  render() {
    return (
      <header className="searchbar" style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={this.state.searchValue}
            onChange={this.handleSearchValue}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;