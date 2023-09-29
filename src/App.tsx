import "./App.css";
import GameList from "./components/GameList";
import { SimpleGrid } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SimpleGrid columns={4} padding="10px" spacing={5} paddingTop={100}>
          <GameList />
        </SimpleGrid>
      </header>
    </div>
  );
}

export default App;
