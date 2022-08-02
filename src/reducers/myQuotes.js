const myQuotesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      //check if the inputted quote exist in  my quotes state
      return !state.includes(action.payload) || state.length == 0
        ? [...state, action.payload]
        : state;
    default:
      return state;
  }
};

export default myQuotesReducer;
