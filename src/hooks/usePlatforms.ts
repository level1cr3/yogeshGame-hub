import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/apiClient";
//import platforms from "../data/platforms";

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    // initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
