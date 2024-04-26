import { useParams } from "react-router-dom";
import useGameDetail from "../hooks/useGameDetail";
import { Heading, Spinner, Text } from "@chakra-ui/react";

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
      <Text>{game.description_raw}</Text>
    </>
  );
};

export default GameDetailPage;
