const playerReducer = (state = {
  x: 10,
  y: 10,
  xLaser:10,
  yLaser:10
}, action) => {
  switch (action.type) {
    case "UP":
      state.y -= 1
      state.yLaser -= 1
      return state;
    case "DOWN":
      state.y += 1
      state.yLaser += 1
      return state;
    case "LEFT":
      state.x -= 1
      state.xLaser -= 1
      return state;
    case "RIGHT":
      state.x += 1
      state.xLaser -= 1
      return state;
    case "RIGHT_LASER":
      state.x += 1
      return state;

    default:
      return state;
  }

};
export default playerReducer;

