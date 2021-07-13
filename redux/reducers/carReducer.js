import {
  ADD_SYMPTOMS,
  FETCH_ALL_SYMPTOMS,
  EDIT_SYMPTOMS,
  DELETE_SYMPTOMS,
  FETCH_SYMPTOM,
  UPDATE_SYMPTOMS,
} from "../actions/types";

const initialState = {
  symptoms: null,
  symptom: null,
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SYMPTOMS:
      return {
        ...state,
      };
    case FETCH_ALL_SYMPTOMS:
      return {
        ...state,
        symptoms: action.payload,
      };
    case FETCH_SYMPTOM:
      return {
        ...state,
        symptom: action.payload,
      };
    case EDIT_SYMPTOMS:
      return {};
    case DELETE_SYMPTOMS:
      return {
        ...state,
      };
    case UPDATE_SYMPTOMS:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default carReducer;
