import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageUrl";
import GenreSkeleton from "./GenreSkeleton";

type Props = {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
};

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  const arraySize = 10;
  const skeletons = new Array(arraySize).fill(0).map((_, i) => i + 1);

  return (
    <List>
      {isLoading &&
        skeletons.map((item) => (
          <ListItem key={item} paddingY="5px">
            <GenreSkeleton />
          </ListItem>
        ))}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              src={getCroppedImageUrl(genre.image_background)}
              borderRadius={8}
            />
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant="link"
            >
              <Text isTruncated>{genre.name}</Text>
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;