const playerReducer = (state = {
  x: 10,
  y: 10,
  xLaser: 10,
  yLaser: 10,
  fire: false,
  count: 0,
  speed: 100
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
      state.xLaser += 1
      return state;
    case "RIGHT_LASER":
      state.xLaser += 1
      return state;
    case "RESET":
      state.xLaser = state.x - 1;
      state.yLaser = state.y
      return state;
    case "FIRE":
      state.fire = !state.fire;
      return state;
    case "COUNT_UP":
      state.count++
      return state;
    case "SPEED_UP":
      if (state.speed -8 > 0) {
        state.speed -= 8
      }
      return state;


    default:
      return state;
  }

};
export default playerReducer;

