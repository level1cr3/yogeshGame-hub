import useGenres from "../hooks/useGenres";

const GenreList = () => {
  //const { data } = useData<Genre>("/genres"); // we cannot do this. Because our component should not know about the endpoints.
  // our component should not know anything about making http request.

  const { data } = useGenres();
  return (
    <ul>
      {data.map((g) => (
        <li key={g.id}>{g.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
