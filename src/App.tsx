import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GameList from "./components/GameList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GameList />
      </header>
    </div>
  );
}

export default App;
