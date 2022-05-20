import React from "react";
class Input extends React.Component {
  render() {
    return (
      <div>
        <input
          className={this.props.className}
          type="number"
          onChange={this.props.onChange}
          value={this.props.value}
        />
      </div>
    );
  }
}
export default Input;
