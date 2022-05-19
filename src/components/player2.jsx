import H2 from "./h2";
import React from "react";
class Player2 extends React.Component {
  render() {
    return (
      <div className="Player2">
        <h1>Player 2</h1>
        <H2 text="score" />
        <H2 text="0" />
        <H2 text="curret score" />
        <H2 text="0" />
      </div>
    );
  }
}

export default Player2;
