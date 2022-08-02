import { useState } from "react";
import ListQuote from "./ListQuote";
import { addQuote } from "../actions";
import { useDispatch, useSelector } from "react-redux/es/exports";

export default function AddQuote() {
  const dispatch = useDispatch();
  const listQuote = useSelector((state) => state.myQuotes);
  const [value, setValue] = useState("");

  //set input value to state (controlled input)
  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  //function submit for add input quotes to redux store
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addQuote(value.trim())); //trim for no duplicate value
    if (!listQuote.includes(value.trim())) setValue(""); //set value to empty string after submit
  };

  return (
    <section className="add-quote-section">
      <hr />
      <h2>My Quotes</h2>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <ListQuote />
    </section>
  );
}
