import axios from "axios";
import {
  SIGNIN,
  SIGNUP,
  FETCH_USER,
  FETCH_USER_DETAILS,
  CHANGEPASSWORD,
  UPDATEPROFILE,
  SIGNOUT,
  FETCH_ALL_USERS,
  DELETE_USER,
} from "../actions/types";
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

// change Passwrod

export const changePassword = ({
  currentPassword,
  password,
  comfirmPassword,
}) => async (dispatch) => {
  const token = localStorage.getItem("jwt");
  try {
    const response = await axios.put(
      `${baseUrl}/changePassword`,
      {
        password: currentPassword,
        newPassword: password,
        comfirmPassword: comfirmPassword,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 201) {
      const user = response.data.message;
      dispatch({
        type: CHANGEPASSWORD,
        payload: user,
      });
    }
  } catch (err) {
    const error = err.response;
    throw new Error(error.data.error);
  } finally {
  }
};

// Get login user info
export const signInUserInfo = () => async (dispatch) => {
  const token = localStorage.getItem("jwt");
  try {
    const response = await axios.get(`${baseUrl}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      const user = response.data.user;
      dispatch({
        type: FETCH_USER_DETAILS,
        payload: user,
      });
    }
  } catch (err) {
    const error = err.response;
    throw new Error(error.data.error);
  } finally {
  }
};

// update profil
export const updateProfile = ({ email, username }) => async (dispatch) => {
  const token = localStorage.getItem("jwt");
  try {
    const response = await axios.put(
      `${baseUrl}/updateDetails`,
      {
        email: email,
        username: username,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 201) {
      const user = response.data.message;
      dispatch({
        type: UPDATEPROFILE,
        payload: user,
      });
    }
  } catch (err) {
    const error = err.response;
    throw new Error(error.data.email[0]);
  } finally {
  }
};

// Signout
export const signOut = () => async (dispatch) => {
  try {
    const storage = localStorage.clear();
    if (storage) {
      dispatch({
        type: SIGNOUT,
      });
    }
  } catch (error) {
    throw new Error(error);
  } finally {
  }
};

// Fetch all users
export const fetchAllUserInfo = () => async (dispatch) => {
  const token = localStorage.getItem("jwt");
  try {
    const response = await axios.get(`${baseUrl}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      const users = response.data.user.data;
      dispatch({
        type: FETCH_ALL_USERS,
        payload: users,
      });
    }
  } catch (err) {
    const error = err.response;
    throw new Error(error.data.error);
  } finally {
  }
};

// Delete user
export const deleteUser = (id) => async (dispatch) => {
  const token = localStorage.getItem("jwt");
  try {
    const response = await axios.delete(`${baseUrl}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      const user = response.data.message;
      console.log(response);
      dispatch({
        type: DELETE_USER,
        payload: user,
      });
    }
  } catch (err) {
    const error = err.response;
    console.log(err.response)
    throw new Error(err);
  } finally {
  }
};
