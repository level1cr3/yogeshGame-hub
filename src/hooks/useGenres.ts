import useData from "./useData";

type Genre = {
  id: number;
  name: string;
  image_background: string;
};

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
