import H2 from "./h2";
import React from "react";
class Player extends React.Component {
  render() {
    return (
      <div className="player">
        <h1>Player {this.props.playerNumber}</h1>
        <H2 text="score" />
        <H2 text="0" />
        <H2 text="current score" />
        <H2 text="0" />
      </div>
    );
  }
}

export default Player;
