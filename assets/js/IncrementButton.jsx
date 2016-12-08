import React from 'react';

class IncrementButton extends React.Component {
  render() {
    return (
      <div>
        <button type="button" onClick={this.props.onclick}>Increment</button>
      </div>
    );
  }
}

export default IncrementButton;
