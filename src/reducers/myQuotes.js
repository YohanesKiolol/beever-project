const myQuotesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      //check if the inputted quote exist in  my quotes state
      if (!state.includes(action.payload) || state.length == 0) {
        return [...state, action.payload];
      }
      return state;
    default:
      return state;
  }
};

export default myQuotesReducer;
