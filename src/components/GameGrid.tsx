import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";
import CardContainer from "./CardContainer";
import { GameQuery } from "../App";
import { Fragment, useState } from "react";

type Props = {
  gameQuery: GameQuery;
};

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text colorScheme="red">{error.message}</Text>;

  return (
    <Box padding="10px">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {isLoading &&
          skeletons.map((i) => (
            <CardContainer key={i}>
              <CardSkeleton />
            </CardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <Fragment key={index}>
            {page.results.map((game) => (
              <CardContainer key={game.id}>
                <GameCard game={game} />
              </CardContainer>
            ))}
          </Fragment>
        ))}
      </SimpleGrid>

      {hasNextPage && (
        <Button
          isDisabled={isFetchingNextPage}
          onClick={() => fetchNextPage()}
          marginY={5}
        >
          {isFetchingNextPage ? "Loading..." : "Load more"}
        </Button>
      )}
    </Box>
  );
};

export default GameGrid;
