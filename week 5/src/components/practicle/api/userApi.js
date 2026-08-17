import axios from "axios";

export const createUser = (data) => {
  return axios.post("https://jsonplaceholder.typicode.com/users", data);
};