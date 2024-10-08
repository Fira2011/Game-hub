import React, { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import axios from "axios";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../Hook/useGame";
import GameCard from "./GameCard";


const GamesGrid = () => {
  const {games ,error}= useGame()
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm: 1 , md:2 , lg : 3 , xl: 5}} spacing={10} padding={10}>
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};
export default GamesGrid;
