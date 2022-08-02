import { useSelector } from "react-redux/es/exports";

export default function ListQuote() {
  //access inputted quotes from redux store
  const myQuotes = useSelector((state) => state.myQuotes);

  //map to show list of inputted quotes
  return (
    <ol>
      {myQuotes.map((quote) => (
        <li key={quote}>{quote}</li>
      ))}
    </ol>
  );
}
