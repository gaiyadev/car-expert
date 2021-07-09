import axios from "axios";
import { SIGNIN, SIGNUP } from "../actions/types";
// const baseUrl = "";
axios.defaults.baseURL = "";
const token = localStorage.getItem("jwt");

// headers
const headers = {
  Authorization: `Bearer ${token}`,
};

// SIGN UP
export const SignUp = ({ username, email, password }) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/api/v1/signup`, {
      username: username.trim(),
      email: email.trim(),
      password: password.trim(),
    });
    if (response.data) {
      console.log(response.data);
      dispatch({
        type: SIGNUP,
        payload: response.data,
      });
    }
  } catch (err) {
    const error = err.error;
    throw new Error(error);
  }
};

// Sign in
export const SignIn = ({ email, password }) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/api/v1/signin`, {
      email: email.trim(),
      password: password.trim(),
    });
    if (response) {
      dispatch({
        type: SIGNIN,
        payload: response.data,
      });
    }
  } catch (err) {
    const error = err.error;
    throw new Error(error);
  }
};

// async function asyncFunc() {
//   try {
//     // fetch data from a url endpoint
//     const response = await axios.get("/some_url_endpoint");
//     const data = await response.json();

//     return data;
//   } catch (error) {
//     alert(error); // catches both errors
//   }
// }
