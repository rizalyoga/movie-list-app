const initialState = [];

const postTrending = (state = initialState, action) => {
  if (action.type === "SET_TRENDING") {
    return action.payload;
  }

  return state;
};

export default postTrending;
