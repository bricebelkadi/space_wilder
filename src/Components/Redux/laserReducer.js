const laserReducer = (state = {
    x: 10,
    y: 10
  }, action) => {
    switch (action.type) {
      case "LEFT":
          state.x -= 1
          return state;
      case"RIGHT":
        state.x += 1
        return state;
      default:
        return state;
    }
  
  };
  export default laserReducer;
  
  