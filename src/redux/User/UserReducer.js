import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "./UserType";

const initialstate = {
  loading: false,
  users: [],
  error: "",
};

const userReducer = (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
