import React, { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import axios from "axios";
import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGame from "../Hook/useGame";
import GameCard from "./GameCard";
import GamecardSkeleton from "./GamecardSkeleton";

const GamesGrid = () => {
  const { games, error, isLoading } = useGame();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding={10}
      >
        {isLoading && skeletons.map((Skeleton) => <GamecardSkeleton />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};
export default GamesGrid;
