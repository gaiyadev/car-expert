import { combineReducers } from "redux";
import authReducer from "../../redux/reducers/authReducer";
import carReducer from "../../redux/reducers/carReducer";

// To bring all app reducers together
export default combineReducers({
  auth: authReducer,
  car: carReducer,
});
