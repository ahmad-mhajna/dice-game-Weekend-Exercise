import React from "react";
import Dice from "./dice";
import Button from "./button";
import Input from "./input";
class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <Button className="newgame" text="New game" />
        <Dice className="dice1" />
        <Dice className="dice2" />
        <Button className="Hold" text=" Hold" />
        <Button className="Roll-dice" text="Roll Dice" />
        <Input className="input" />
      </div>
    );
  }
}
export default Container;
