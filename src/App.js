import React from "react";
import Container from "./components/container";
import Player from "./components/player";
import "./style.css";
class App extends React.Component {
  state = {
    score: [0, 1],
    currentScore: "0",
    dice: [1, 2],
    maxScore: 100,
    PlayerOneTurn: true,
  };
  render() {
    return (
      <div className="body">
        <Player
          score={this.state.score}
          currentScore={this.state.currentScore}
          playerNumber="1"
        />
        <Container dice={this.state.dice} />
        <Player
          score={this.state.score}
          currentScore={this.state.currentScore}
          playerNumber="1"
        />
      </div>
    );
  }
}

export default App;
