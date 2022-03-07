const initialState = {};

const detailReduce = (state = initialState, action) => {
  if (action.type === "SET_DETAILS") {
    console.log(action.payload);
    return action.payload;
  }

  return state;
};

export default detailReduce;
