const initialState = [];

export const reducer = (state = initialState, action) => {
  if (action.type === "ADD_VIDEOS") {
    return action.payload;
  }

  return state;
};
