import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface FetchGamesResponse {
  results: Game[];
}

const GameList = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results));
  });

  return (
    <ul>
      {games.map((game) => (
        <>
          <li key={game.id}>
            <img src={game.background_image} />
          </li>
          <li>{game.name}</li>
        </>
      ))}
    </ul>
  );
};
export default GameList;
