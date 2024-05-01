import { useQuery } from "@tanstack/react-query";
import { Trailer } from "../entities/Trailer";
import ApiClient from "../services/apiClient";

const useTrailers = (gameId: number) => {
  const apiClient = new ApiClient<Trailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useTrailers;
