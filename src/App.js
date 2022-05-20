import React from "react";
import Container from "./components/container";
import Player from "./components/player";
import Winscreen from "./components/winner";
import "./style.css";
class App extends React.Component {
  state = {
    score: [0, 0],
    currentScore: [0, 0],
    dice: [0, 0],
    scoreToWin: 100,
    playerOneTurn: true,
    hidden: true,
    whoWon: 0,
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
      this.setState({ hidden: false, whoWon: 1 });
    else if (score[1] === scoreToWin || score[0] > scoreToWin)
      this.setState({ hidden: false, whoWon: 2 });
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
          playerNumber="1"
          className="player1"
          isTurn={this.state.playerOneTurn === true}
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
          className="player2"
          isTurn={this.state.playerOneTurn === false}
        />
        {!this.state.hidden && (
          <Winscreen
            whoWon={this.state.whoWon}
            resetGame={() => {
              this.setState(this.initialState);
            }}
          />
        )}
      </div>
    );
  }
}

export default App;
