const initialState = 0;

const counterReducer = (
  state = initialState,
  action: { type: string }
): number => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
