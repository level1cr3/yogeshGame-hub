import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttribute from "../components/GameAttribute";
import GameScreenshots from "../components/GameScreenshots";
import GameTrailer from "../components/GameTrailer";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!); // we know slug will never be. Because if it is null we will never reach this page as per our route config

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;
  //if there is error or there is no game then throw error which we will catch in error page .
  // and at some-point we will log that at permanent place.

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableText maxChar={300}>{game.description_raw}</ExpandableText>
        <GameAttribute game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
