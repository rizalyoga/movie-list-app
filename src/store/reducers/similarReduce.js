const initialState = [];

const similarReduce = (state = initialState, action) => {
  if (action.type === "SET_SIMILAR") {
    console.log("reduce similar : ", action.payload);
    return action.payload;
  }

  return state;
};

export default similarReduce;
