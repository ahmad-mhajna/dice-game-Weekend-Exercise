import React from "react";
import Button from "./button";
class Winscreen extends React.Component {
  render() {
    return (
      <div className="container-winScreen">
        <div className="winScreen">
          <h1>Player {this.props.whoWon} Won</h1>
          <Button
            className="newgame"
            text="New game"
            onClick={this.props.resetGame}
          />
        </div>
      </div>
    );
  }
}
export default Winscreen;
