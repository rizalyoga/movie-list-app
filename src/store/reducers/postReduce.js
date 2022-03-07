const initialState = [];

const postReduce = (state = initialState, action) => {
  if (action.type === "SET_POST") {
    return action.payload;
  }

  return state;
};

export default postReduce;
