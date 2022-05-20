import React from "react";
import Dice from "./dice";
import Button from "./button";
import Input from "./input";
class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <Button className="newgame" text="New game" />
        <Dice className={`dice${this.props.dice[0]}`} />
        <Dice className={`dice${this.props.dice[1]}`} />
        <Button className="Hold" text=" Hold" />
        <Button className="Roll-dice" text="Roll Dice" />
        <Input className="input" />
      </div>
    );
  }
}
export default Container;
