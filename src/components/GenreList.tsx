import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageUrl";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <List>
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
