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
  const [filter, setFilter] = useState<Game["name"]>();

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results));
  });

  return (
    <>
      <div>
        <input
          id="filter"
          name="filter"
          type="text"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        />
      </div>
      <div>
        <ul>
          {games
            .filter((f) => f.name.includes(filter as string) || filter === "")
            .map((game) => (
              <>
                <li key={game.id}>
                  <img
                    src={game.background_image}
                    alt=""
                    height="300px"
                    width="300px"
                  />
                </li>
                <li>{game.name}</li>
              </>
            ))}
        </ul>
      </div>
    </>
  );
};
export default GameList;
