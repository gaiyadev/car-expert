import axios from "axios";
import { ADD_SYMPTOMS, DELETE_SYMPTOMS, FETCH_ALL_SYMPTOMS } from "./types";
const baseUrl = "http://localhost:5000/api/v1/cars";

// add UP
export const addSymptom = ({
  causes,
  solutions,
  carType,
  type,
  yearOfManufacture,
  symptoms,
}) => async (dispatch) => {
  const token = localStorage.getItem("jwt");

  try {
    const response = await axios.post(
      `${baseUrl}/car`,
      {
        causes,
        solution: solutions,
        carType,
        type,
        yearOfManufacture,
        symptoms,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 201) {
      dispatch({
        type: ADD_SYMPTOMS,
        payload: response.data.message,
      });
    }
  } catch (err) {
    console.log(err.response);
    const error = err.response.data.symptoms[0];
    throw new Error(error);
  } finally {
  }
};

//  Get all symptims
export const fetchSymptoms = () => async (dispatch) => {
  const token = localStorage.getItem("jwt");
  try {
    const response = await axios.get(`${baseUrl}/car`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      const data = response.data.cars.data;
      dispatch({
        type: FETCH_ALL_SYMPTOMS,
        payload: data,
      });
    } 
  } catch (err) {
    const error = err.response;
    throw new Error(error.data.error);
  } finally {
  }
};

// Delete a symptoms
export const deleteSymptoms = (id) => async (dispatch) => {
  const token = localStorage.getItem("jwt");
  try {
    const response = await axios.delete(`${baseUrl}/del/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      const user = response.data.message;
      dispatch({
        type: DELETE_SYMPTOMS,
        payload: user,
      });
    }
  } catch (err) {
    const error = err.response;
    console.log(error);
    throw new Error(error);
  } finally {
  }
};
