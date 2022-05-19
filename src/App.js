import React from "react";
import Container from "./components/container";
import Player1 from "./components/player1";
import Player2 from "./components/player2";
import "./style.css";
function App() {
  return (
    <div className="body">
      <Player1 />
      <Container />
      <Player2 />
    </div>
  );
}

export default App;
