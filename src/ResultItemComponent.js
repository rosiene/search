import React, { Component } from 'react';

class ResultItemComponent extends Component {

  constructor(props){
    super(props);
  }

  /**
   * Render item result
   * @return {js}
   */
  render() {
    return (
      <div>{this.props.searchterm} ({this.props.nrResults})
      </div>
    );
  }
}

export default ResultItemComponent;
