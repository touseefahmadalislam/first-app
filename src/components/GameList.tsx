import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Card, Image, CardBody, Text } from "@chakra-ui/react";

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
      .get<FetchGamesResponse>("games")
      .then((res) => setGames(res.data.results));
  });

  return (
    <>
      {games.map((game) => (
        <>
          <Card key={game.id}>
            <Image
              borderRadius="10"
              boxSize="300px"
              overflow="hidden"
              src={game.background_image}
            />
            <CardBody>
              <Text color="blue.600">{game.name}</Text>
            </CardBody>
          </Card>
        </>
      ))}
    </>
  );
};

export default GameList;
