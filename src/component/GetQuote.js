import { useState, useEffect } from "react";
import image from "../kanye-west.jpeg";
import ListFavorite from "./ListFavorite";
import { addFavorite } from "../actions";
import { useDispatch } from "react-redux/es/exports";

export default function GetQuote() {
  const dispatch = useDispatch();
  const [quote, setQuote] = useState("");

  //function to fetch quote from api
  const fetchQuote = async () => {
    const response = await fetch("https://api.kanye.rest");
    const result = await response.json();
    setQuote(result.quote);
  };

  //fetch initial quote
  useEffect(() => {
    fetchQuote();
  }, []);

  //call a fetchQuote function
  const handleClick = () => {
    fetchQuote();
  };

  //function submit for add quote value to redux store
  const handleAddFavorite = () => {
    dispatch(addFavorite(quote));
  };

  return (
    <section>
      <img className="image" src={image} alt="" />
      <h1>Kanye-West Quote</h1>
      <h3>{quote}</h3>
      <button onClick={handleClick}>Get Quote</button>
      <button onClick={handleAddFavorite}>Add Favorite</button>
      <ListFavorite />
    </section>
  );
}
