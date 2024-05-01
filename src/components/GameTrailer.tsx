import useTrailers from "../hooks/useTrailers";

type Props = {
  gameId: number;
};

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailers(gameId);
  console.log(data);

  if (isLoading) return null;

  if (error) throw new Error(error.message);

  const first = data?.results[0];

  return first ? (
    <video poster={first.preview} src={first.data[480]} controls />
  ) : null;
};

export default GameTrailer;
