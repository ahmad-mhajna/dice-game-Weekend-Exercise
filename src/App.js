import React from "react";
import Container from "./components/container";
import Player from "./components/player";
import "./style.css";
class App extends React.Component {
  state = {
    score: [0, 0],
    currentScore: [0, 0],
    dice: [0, 0],
    scoreToWin: 100,
    playerOneTurn: true,
  };
  initialState = { ...this.state };
  rollDice = () => {
    let newDice = [];
    for (let i = 0; i < 2; i++) {
      let num = Math.ceil(Math.random() * 6);
      newDice.push(num);
    }
    if (newDice.every((dice) => dice === 6))
      this.setState({
        dice: newDice,
        currentScore: [0, 0],
        playerOneTurn: !this.state.playerOneTurn,
      });
    else {
      this.setState({ dice: newDice }, this.setCurrentScore);
    }
  };
  setCurrentScore = () => {
    let dice = this.state.dice;
    let currentScore = this.state.currentScore;
    let sum = dice[1] + dice[0];
    if (this.state.playerOneTurn) {
      sum += currentScore[0];
      this.setState({ currentScore: [sum, 0] });
    } else {
      sum += currentScore[1];
      this.setState({ currentScore: [0, sum] });
    }
  };
  onHold = () => {
    let currentScore = this.state.currentScore;
    let score = this.state.score;
    if (currentScore[0] !== 0 || currentScore[1] !== 0) {
      let sum = [score[0] + currentScore[0], score[1] + currentScore[1]];
      this.setState(
        {
          score: sum,
          currentScore: [0, 0],
          playerOneTurn: !this.state.playerOneTurn,
        },
        this.checkScore
      );
    }
  };
  checkScore = () => {
    let score = this.state.score;
    let scoreToWin = this.state.scoreToWin;
    if (score[0] === scoreToWin || score[1] > scoreToWin)
      console.log("player1 won");
    else if (score[1] === scoreToWin || score[0] > scoreToWin)
      console.log("player2 won");
  };
  scoreToWin = (event) => {
    let newValue = +event.target.value;
    this.setState({ scoreToWin: newValue });
  };
  render() {
    return (
      <div className="body">
        <Player
          score={this.state.score[0]}
          currentScore={this.state.currentScore[0]}
          playerNumber="2"
        />
        <Container
          onChangeinput={this.scoreToWin}
          value={this.state.scoreToWin}
          dice={this.state.dice}
          rollDice={this.rollDice}
          onHold={this.onHold}
          resetGame={() => {
            this.setState(this.initialState);
          }}
        />
        <Player
          score={this.state.score[1]}
          currentScore={this.state.currentScore[1]}
          playerNumber="2"
        />
      </div>
    );
  }
}

export default App;
