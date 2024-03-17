import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

type Props = {
  gameQuery: GameQuery;
};

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres, error: genreError } = useGenres();
  const { data: platforms, error: platformError } = usePlatforms();

  if (genreError || platformError)
    return (
      <Heading as="h1" fontSize="5xl" marginY={5}>
        Games
      </Heading>
    );

  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);

  const platform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  );

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" fontSize="5xl" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
