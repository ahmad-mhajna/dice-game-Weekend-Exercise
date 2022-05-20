import H2 from "./h2";
import React from "react";
class Player extends React.Component {
  render() {
    return (
      <div
        className={`${this.props.className} ${
          this.props.isTurn ? "selected" : ""
        }`}
      >
        <h1>Player {this.props.playerNumber}</h1>
        <H2 text="Score" />
        <H2 text={this.props.score} />
        <H2 text="Current Score" />
        <H2 text={this.props.currentScore} />
      </div>
    );
  }
}

export default Player;
