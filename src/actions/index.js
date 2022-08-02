//action for add favorite quote
export const addFavorite = (quote) => {
  return {
    type: "ADD_FAVORITE",
    payload: quote,
  };
};

//action for add quote
export const addQuote = (inputQuote) => {
  return {
    type: "ADD_QUOTE",
    payload: inputQuote,
  };
};
