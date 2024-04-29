import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttribute from "../components/GameAttribute";
import useGameDetail from "../hooks/useGameDetail";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetail(slug!); // we know slug will never be. Because if it is null we will never reach this page as per our route config

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;
  //if there is error or there is no game then throw error which we will catch in error page .
  // and at some-point we will log that at permanent place.

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText maxChar={300}>{game.description_raw}</ExpandableText>
      <GameAttribute game={game} />
    </>
  );
};

export default GameDetailPage;
