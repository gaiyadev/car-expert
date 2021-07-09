import { combineReducers } from "redux";
import authReducer from "../../redux/reducers/authReducer";

// To bring all app reducers together
export default combineReducers({
  auth: authReducer,
});
