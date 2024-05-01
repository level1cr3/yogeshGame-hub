import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

type Props = {
  gameId: number;
};

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={5} marginY={5}>
      {data?.results.map((item) => (
        <Image key={item.id} src={item.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
