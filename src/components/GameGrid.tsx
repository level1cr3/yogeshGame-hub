import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";
import CardContainer from "./CardContainer";
import { GameQuery } from "../App";

type Props = {
  gameQuery: GameQuery;
};

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      padding="10px"
    >
      {isLoading &&
        skeletons.map((i) => (
          <CardContainer key={i}>
            <CardSkeleton />
          </CardContainer>
        ))}
      {data.map((game) => (
        <CardContainer key={game.id}>
          <GameCard game={game} />
        </CardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
