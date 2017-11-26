import React, { Component } from 'react';
import SearchInputComponent from './SearchInputComponent';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="main">
          <SearchInputComponent/>
        </div>
      </div>
    );
  }
}

export default App;
