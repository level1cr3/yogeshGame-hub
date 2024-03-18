import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
  const { data } = usePlatforms();
  // need to handle the error if any .
  return data?.results.find((p) => p.id === id);
};

export default usePlatform;
