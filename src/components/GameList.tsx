import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import {
  Card,
  Box,
  HStack,
  Image,
  SimpleGrid,
  CardBody,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";

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
      <SimpleGrid columns={4} padding="10px" spacing={5} paddingTop={100}>
        <Card>
          {games.map((game) => (
            <>
              <Image
                borderRadius="10"
                boxSize="300px"
                overflow="hidden"
                src={game.background_image}
              />
              <Stack mt="6" spacing="3"></Stack>
              <Text color="blue.600" fontSize="2xl">
                {game.name}
              </Text>
            </>
          ))}
        </Card>
      </SimpleGrid>
    </>
  );
};

export default GameList;
