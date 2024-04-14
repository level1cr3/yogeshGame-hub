import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

// undefined : Absence of a value.
// null : Intentional absence of a value.

export type GameQuery = {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
};

type GameQueryStore = {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
};

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},

  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })), // when user searches for game we should clear genre, platform

  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),

  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),

  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("GameQuery Store", useGameQueryStore);

export default useGameQueryStore;
