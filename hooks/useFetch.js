import axios from "axios";

export const useFetch = async (url, headers) => {
  await axios.get(url, { headers: headers });
};
