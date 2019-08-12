export default (state = [], action) => {
  switch (action.type) {
    case "SELECT_USER":
      return [...state, action.payload];
    default:
      return state;
  }
};
