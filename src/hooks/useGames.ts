import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { AxiosError, CanceledError } from "axios";

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

export type Game = {
  id: number;
  name: string;
  background_image: string;
  // parent_platform: Platform[]; // It is not platform array in the api. It should have been that but that is design smell then didn't design it properly
  parent_platforms: { platform: Platform }[];
  metacritic: number;
};

type FetchGamesResponse = {
  count: number;
  results: Game[];
};

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setIsLoading(false);
      })
      .catch((err: AxiosError) => {
        //setIsLoading(false); i was having issue. Because of this. because in strict mode react loads everything  twice to
        // catch error. and i have used controller to abort incomplete request. and since incomplete request throws
        // error. my isLoading was getting saved false. and skeleton was never loading.
        // Because loading never true in game grid
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false); // so isLoading will only be turned off after setting error.
      });

    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
