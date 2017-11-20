// Code DelayedButton Component Here
import React from "react";

class DelayedButton extends React.Component {
  someFunction = event => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  };

  render() {
    return <button onClick={this.someFunction}>Other Button</button>;
  }
}

export default DelayedButton;
