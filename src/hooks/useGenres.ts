import genres from "../data/genres";

export type Genre = {
  id: number;
  name: string;
  image_background: string;
};

// const useGenres = () => useData<Genre>("/genres");// incase we decide to get data from server.
const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
