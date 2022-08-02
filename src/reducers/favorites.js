const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      //check if the favorite quote exist in  favorites state
      if (!state.includes(action.payload) || state.length == 0) {
        return [...state, action.payload];
      }
      return state;
    default:
      return state;
  }
};

export default favoritesReducer;
