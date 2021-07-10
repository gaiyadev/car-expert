import axios from "axios";
import { SIGNIN, SIGNUP } from "../actions/types";
const baseUrl = "http://localhost:5000/api/v1/users";
// axios.defaults.baseURL = "";
// const token = localStorage.getItem("jwt");

// headers
const headers = {
  // Authorization: `Bearer ${token}`,
};

// SIGN UP
export const signUp = ({ username, email, password }) => async (dispatch) => {
  console.log("redux is seeen");
  try {
    const response = await axios.post(`${baseUrl}/signup`, {
      username: username.trim(),
      email: email.trim(),
      password: password.trim(),
    });

    if (response.status === 201) {
      console.log(response.data.message);
      dispatch({
        type: SIGNUP,
        payload: response.data.message,
      });
    }
  } catch (err) {
    const error = err.response;
    throw new Error(error.data.email[0]);
  } finally {
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
  } finally {
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
