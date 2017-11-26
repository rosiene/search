import React, { Component } from 'react';
import SearchInputComponent from './SearchInputComponent';
import ListResultsComponent from './ListResultsComponent';

class SearchComponent extends Component {

  constructor(){
    super();
    this.state = {
      loading: false,
      text: '',
      results: []
    };
    this.doSearch = this.doSearch.bind(this);
    this.cleanSearch = this.cleanSearch.bind(this);
  }

  /**
   * Render search input component
   * @return {js}
   */
  doSearch(text){
    const self = this;
    this.setState({loading: true, text: text})
    fetch('http://localhost:5000/search?q='+text)
    .then((result) => {
      return result.json();
    }).then((data) => {
      console.log(data.suggestions);
      this.setState({results: data.suggestions, loading: false})
    });
  }

  cleanSearch(){
    console.log('clean');
    this.setState({results: []});
  }

  /**
   * Render search input component
   * @return {js}
   */
  render() {
    return (
      <div>
        <SearchInputComponent
          doSearch={this.doSearch}
          cleanSearch={this.cleanSearch} />
        {this.state.results ?
          <ListResultsComponent
            list={this.state.results}
            textSearch={this.state.text} />
        : this.state.loading ? 'Loading...'
        : null
        }
      </div>
    );
  }
}

export default SearchComponent;
