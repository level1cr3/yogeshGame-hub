import { Game } from "../entities/Game";
import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import DescriptionItem from "./DescriptionItem";

type Props = {
  game: Game;
};

const GameAttribute = ({ game }: Props) => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={5} marginY={5} as="dl">
      <DescriptionItem term="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DescriptionItem>
      <DescriptionItem term="Metascore">
        <Text>
          <CriticScore score={game.metacritic} />
        </Text>
      </DescriptionItem>
      <DescriptionItem term="Genres">
        {game.genres?.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DescriptionItem>
      <DescriptionItem term="Publishers">
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DescriptionItem>
    </SimpleGrid>
  );
};

export default GameAttribute;
