import React, { Component } from 'react';
import IconSearch from './icons/IconSearch'
import IconRemove from './icons/IconRemove'

class SearchInputComponent extends Component {

  constructor(){
    super();
    this.state = {text: ''};
    this.handleChange = this.handleChange.bind(this);
    this.cleanInputSearch = this.cleanInputSearch.bind(this);
  }

  /**
   * Update state text with input
   */
  handleChange(event){
    this.setState({text: event.target.value});
  }

  /**
   * Clean text from input search
   */
  cleanInputSearch(){
    this.setState({text: ''});
  }

  /**
   * Render search input component
   * @return {js}
   */
  doSearch(event){
    event.preventDefault();
    console.log('search');
  }

  /**
   * Render search input component
   * @return {js}
   */
  render() {
    return (
      <div className="search_input">
        <form id="search-form" onSubmit={this.doSearch.bind(this)}>
          <input placeholder="Zoeken" value={this.state.text} type="text" onChange={this.handleChange}/>
          <button type="button" className="clean_input" name="cleanInput" onClick={this.cleanInputSearch}>
            <IconRemove />
          </button>
          <button type="submit" className="search_button">
            <IconSearch />
          </button>
        </form>
      </div>
    );
  }
}

export default SearchInputComponent;
