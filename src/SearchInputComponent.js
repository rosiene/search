import React, { Component } from 'react';
import IconSearch from './icons/IconSearch'
import IconRemove from './icons/IconRemove'

class SearchInputComponent extends Component {

  constructor(){
    super();
    this.state = {
      text: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.cleanInputSearch = this.cleanInputSearch.bind(this);
  }

  /**
   * Update state text with input
   */
  handleChange(event){
    this.setState({text: event.target.value});
    if (event.target.value == ''){
      this.props.cleanSearch();
    }else{
      this.props.doSearch(event.target.value);
    }
  }

  /**
   * Clean text from input search
   */
  cleanInputSearch(){
    this.setState({text: ''});
    this.props.cleanSearch();
  }

  /**
   * Callback do search
   */
  handleSearch(event){
    event.preventDefault();
  }

  /**
   * Render search input component
   * @return {js}
   */
  render() {
    return (
      <div className={`search_input ${this.state.text ? 'hover-seach' : ''}`}>
        <form id="search-form" onSubmit={this.handleSearch}>
          <input placeholder="Zoeken" value={this.state.text} type="text" onChange={this.handleChange} onFocus={this.hoverElements}/>
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
