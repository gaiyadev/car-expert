import axios from "axios";
import { ADD_SYMPTOMS } from "./types";
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
    const error = err.response.data.symptoms[0]
    throw new Error(error);
  } finally {
  }
};
