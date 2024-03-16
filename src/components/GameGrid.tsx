import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";
import CardContainer from "./CardContainer";
import { GameQuery } from "../App";
import { useState } from "react";

type Props = {
  gameQuery: GameQuery;
};

const GameGrid = ({ gameQuery }: Props) => {
  const page_size = 8;
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useGames({
    ...gameQuery,
    page,
    page_size,
  });

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text colorScheme="red">{error.message}</Text>;

  return (
    <>
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
        {data?.results.map((game) => (
          <CardContainer key={game.id}>
            <GameCard game={game} />
          </CardContainer>
        ))}
      </SimpleGrid>
      {page > 1 && (
        <Button marginEnd={5} onClick={() => setPage(page - 1)}>
          Prev
        </Button>
      )}
      <Button onClick={() => setPage(page + 1)}>Next</Button>
    </>
  );
};

export default GameGrid;
