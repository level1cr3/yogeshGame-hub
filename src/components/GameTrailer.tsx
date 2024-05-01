import useTrailers from "../hooks/useTrailers";

type Props = {
  gameId: number;
};

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <video poster={first.preview} src={first.data[480]} controls />
  ) : null;
};

export default GameTrailer;
