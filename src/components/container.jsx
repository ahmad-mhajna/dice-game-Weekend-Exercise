import React from "react";
import Dice from "./dice";
import Button from "./button";
import Input from "./input";
class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <Button
          className="newgame"
          text="New game"
          onClick={this.props.resetGame}
        />
        <Dice className={`dice${this.props.dice[0]}`} />
        <Dice className={`dice${this.props.dice[1]}`} />
        <Button className="Hold" text=" Hold" onClick={this.props.onHold} />
        <Button
          className="Roll-dice"
          text="Roll Dice"
          onClick={this.props.rollDice}
        />
        <Input
          className="input"
          onChange={this.props.onChangeinput}
          value={this.props.value}
        />
      </div>
    );
  }
}
export default Container;
