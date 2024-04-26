import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/apiClient";

type GameDetail = {
  id: number;
  slug: string;
  name: string;
  name_original: string;
  description: string;
  description_raw: string;
};

const apiClient = new ApiClient<GameDetail>("/games");

const useGameDetail = (slug: string) =>
  useQuery<GameDetail, Error>({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get(slug),
  });

export default useGameDetail;
