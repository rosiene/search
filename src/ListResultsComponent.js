import React, { Component } from 'react';
import ResultItemComponent from './ResultItemComponent'

class ListResultsComponent extends Component {

  constructor(props){
    super(props);
  }

  /**
   * Render list of results
   * @return {js}
   */
  render() {
    return (
      <div>
        <ul>
          {this.props.list.map((item, key) =>
            <li key={key}>
              <ResultItemComponent
                searchterm={item.searchterm}
                nrResults={item.nrResults}
                textSearch={this.props.textSearch}/>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default ListResultsComponent;
