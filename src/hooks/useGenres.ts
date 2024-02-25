import useData from "./useData";

type Genre = {
  id: number;
  name: string;
};


const useGenres = () => useData<Genre>("/genres");

export default useGenres;
