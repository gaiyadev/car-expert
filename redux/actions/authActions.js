import axios from "axios";
import { SIGNIN, SIGNUP, FETCH_USER } from "../actions/types";
const baseUrl = "http://localhost:5000/api/v1/users";
// const token = localStorage.getItem("jwt");

// headers
const headers = {
  "Content-Type": "application/json",
  Authorization: "",
};

// SIGN UP
export const signUp = ({ username, email, password }) => async (dispatch) => {
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
export const signIn = ({ email, password }) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/signin`, {
      email: email,
      password: password,
    });

    if (response.status === 200) {
      console.log(response.data.token);
      dispatch({
        type: SIGNIN,
        payload: response.data,
      });
    }
  } catch (err) {
    const error = err.response;
    throw new Error(error.data.error);
  } finally {
  }
};

// Get login user info
export const signInUser = () => async (dispatch) => {
  const token = localStorage.getItem("jwt");
  try {
    const response = await axios.get(`${baseUrl}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      const user = response.data.user.username;
      dispatch({
        type: FETCH_USER,
        payload: user,
      });
    }
  } catch (err) {
    const error = err.response;
    throw new Error(error.data.error);
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
