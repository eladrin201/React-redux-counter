import React from 'react';

class DecrementButton extends React.Component {
  render() {
    return (
      <div>
        <button type="button" onClick={this.props.onclick}>Decrement</button>
      </div>
    );
  }
}

export default DecrementButton;
