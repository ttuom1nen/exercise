export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.paylad;
    default:
      return state;
  }
};
