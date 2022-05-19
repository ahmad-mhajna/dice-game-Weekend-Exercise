import React from "react";
class Input extends React.Component {
  render() {
    return (
      <div>
        <input
          className={this.props.className}
          type="number"
          placeholder="100"
        />
      </div>
    );
  }
}
export default Input;
