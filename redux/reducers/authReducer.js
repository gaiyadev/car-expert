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
      return {};
    case SIGNUP:
      return {};

    case CHANGEPASSWORD:
      return {};
    case FETCH_USER:
      return {};
    case SIGNOUT:
      return {};
    default:
      return state;
  }
};

export default authReducer;
