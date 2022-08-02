const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      //check if the favorite quote exist in  favorites state
      return !state.includes(action.payload) || state.length == 0
        ? [...state, action.payload]
        : state;
    default:
      return state;
  }
};

export default favoritesReducer;
