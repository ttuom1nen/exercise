export default (state = [], action) => {
  switch (action.type) {
    case "SWITCH_MODE":
      return action.payload;
    default:
      return state;
  }
};
