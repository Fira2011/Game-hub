import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../Hook/useGame";
import GameCard from "./GameCard";
import GamecardSkeleton from "./GamecardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}
const GamesGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGame(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error}</Text>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={10}
      padding={10}
    >
      {isLoading &&
        skeletons.map((Skeleton) => (
          <GameCardContainer key={Skeleton}>
            <GamecardSkeleton />
          </GameCardContainer>
        ))}
      {data.map((data) => (
        <GameCardContainer key={data.id}>
          <GameCard game={data}></GameCard>
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};
export default GamesGrid;
