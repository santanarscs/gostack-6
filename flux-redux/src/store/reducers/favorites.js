const INITIAL_STATE = [];
function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [
        ...state,
        {
          id: Math.random(),
          name: "facebook/react",
          description: "descrição",
          url: "http://github.com/facebook/react"
        }
      ];
    default:
      return state;
  }
}

export default favorites;
