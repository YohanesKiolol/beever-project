import { useSelector } from "react-redux/es/exports";

export default function AddFavorite() {
  //access favorites state from redux store
  const favorites = useSelector((state) => state.favorites);

  //map to show list of favorites quotes
  return (
    <ol>
      {favorites.map((favorite) => (
        <li key={favorite}>{favorite}</li>
      ))}
    </ol>
  );
}
