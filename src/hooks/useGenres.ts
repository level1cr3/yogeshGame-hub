import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/apiClient";
import genres from "../data/genres";

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
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
