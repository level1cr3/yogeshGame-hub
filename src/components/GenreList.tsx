import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageUrl";
import GenreSkeleton from "./GenreSkeleton";

const GenreList = () => {
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
      {data.map((g) => (
        <ListItem key={g.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              src={getCroppedImageUrl(g.image_background)}
              borderRadius={8}
            />
            <Text fontSize="lg">{g.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
