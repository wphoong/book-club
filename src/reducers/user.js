export default (state = {}, action) => {
  switch(action.type) {
    case "ADD_USER":
      return action.user;
    case "EDIT_USER":
      if (action.updates) {
        return {
          ...state,
          ...action.updates
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};
