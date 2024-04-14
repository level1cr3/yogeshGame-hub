import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import CardContainer from "./CardContainer";
import CardSkeleton from "./CardSkeleton";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();

  if (error) return <Text colorScheme="red">{error.message}</Text>;

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.count, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount} // set it to total number of items we have fetched so far.
      next={fetchNextPage}
      hasMore={hasNextPage}
      loader={<Spinner />}
    >
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
    </InfiniteScroll>
  );
};

export default GameGrid;
