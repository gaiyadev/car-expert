import {
  SIGNIN,
  SIGNUP,
  CHANGEPASSWORD,
  FETCH_USER,
  FETCH_USER_DETAILS,
  SIGNOUT,
  UPDATEPROFILE,
} from "../actions/types";

const initialState = {
  token: null,
  user: {},
  userData: {},
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
      return {
        ...state,
      };
    case CHANGEPASSWORD:
      return {
        ...state,
        token: null,
        user: {},
      };
    case FETCH_USER:
      return {
        ...state,
        user: action.payload,
      };
    case FETCH_USER_DETAILS:
      return {
        ...state,
        userData: action.payload,
      };
    case UPDATEPROFILE:
      return {
        ...state,
      };
    case SIGNOUT:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default authReducer;
