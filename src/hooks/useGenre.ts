import useGenres from "./useGenres";

const useGenre = (id?: number) => {
  const { data } = useGenres();
  // need to handle the error if any .
  return data?.results.find((g) => g.id === id);
};

export default useGenre;
