import { PlaylistAddOutlined } from "@material-ui/icons";
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
  message: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN:
      return {};
    case SIGNUP:
      return {
        user: action.payload,
      };
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
