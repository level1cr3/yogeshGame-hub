import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/apiClient";
import genres from "../data/genres";
import ms from "ms";

export type Genre = {
  id: number;
  name: string;
  image_background: string;
};

const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenres;
