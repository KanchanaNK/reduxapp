import { BUY_ICE } from "./IceType";

const initialstate = {
  numOfIce: 19,
};

const iceReducer = (state = initialstate, action) => {
  switch (action.type) {
    case BUY_ICE:
      return {
        ...state,
        numOfIce: state.numOfIce - 1,
      };
    default:
      return state;
  }
};

export default iceReducer
