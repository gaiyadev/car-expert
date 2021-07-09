import axios from "axios";

export const usePost = async (url, body, headers) => {
  await axios.post(url, { body }, { headers: headers });
};
