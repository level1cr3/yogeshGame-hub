import { GameQuery } from "../App";
import { Platform } from "./usePlatforms";
import ApiClient from "../services/apiClient";
import { useQuery } from "@tanstack/react-query";

export type Game = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
};

const apiClient = new ApiClient<Game>("/games");

const useGames = (gameQuery: GameQuery) =>
  useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: gameQuery.page,
          page_size: gameQuery.page_size,
        },
      }),
  });

export default useGames;
