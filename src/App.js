import React, { Component } from 'react';
import SearchComponent from './SearchComponent';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="main">
          <SearchComponent/>
        </div>
      </div>
    );
  }
}

export default App;
