const initialState = {};

const detailReduce = (state = initialState, action) => {
  console.log("detail reduce");
  if (action.type === "SET_DETAILS") {
    console.log(action.payload);
    return action.payload;
  }

  return state;
};

export default detailReduce;
