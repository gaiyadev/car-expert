import {
  SIGNIN,
  SIGNUP,
  CHANGEPASSWORD,
  FETCH_USER,
  SIGNOUT,
} from "../actions/types";

const initialState = {
  token: null,
  user: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN:
      const jwt = action.payload.token;
      return {
        ...state,
        token: localStorage.setItem("jwt", jwt),
      };
    case SIGNUP:
      return {};
    case CHANGEPASSWORD:
      return {};
    case FETCH_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SIGNOUT:
      return {};
    default:
      return state;
  }
};

export default authReducer;
