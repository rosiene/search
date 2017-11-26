import React, { Component } from 'react';
import IconSearch from './icons/IconSearch'

class SearchInputComponent extends Component {


  /**
   * Render search input component
   * @return {js}
   */
  render() {
    return (
      <div className="search_input">
        <input placeholder="Zoeken" type="text" name="search"/>
        <IconSearch color="dark-grey" />
      </div>
    );
  }
}

export default SearchInputComponent;
