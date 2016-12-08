import React from 'react';
import Redux from 'redux';


class Display extends React.Component {
  render() {
    return (
      <h1>{this.props.displayValue}</h1>
    );
  }
}

export default Display;
