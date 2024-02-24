import { CardHeader, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  // to render a skeleton we need an array with let say 6 times
  const skeletons = [1, 2, 3, 4, 5, 6]; // we don't need state variable here because this is not something
  //that will change over time

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10} padding="10px">
        {isLoading && skeletons.map((i) => <CardSkeleton key={i} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
