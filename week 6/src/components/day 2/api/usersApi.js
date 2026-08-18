import axios from "axios";

export const createUser = (newUser) => {
  return axios
    .post("https://jsonplaceholder.typicode.com/users", newUser)
    .then((res) => res.data);
};