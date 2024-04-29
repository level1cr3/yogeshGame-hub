import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/apiClient";
import { Game } from "../entities/Game";

const apiClient = new ApiClient<Game>("/games");

const useGameDetail = (slug: string) =>
  useQuery<Game, Error>({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get(slug),
  });

export default useGameDetail;
