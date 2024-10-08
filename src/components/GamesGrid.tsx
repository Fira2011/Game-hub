import React, { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import axios from "axios";
import { Text } from "@chakra-ui/react";
import useGame from "../Hook/useGame";


const GamesGrid = () => {
  const {games ,error}= useGame()
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};
export default GamesGrid;
