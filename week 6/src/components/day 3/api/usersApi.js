import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/users";
export const fetchUsers = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const addUser = async (newUser) => {
  const response = await axios.post(BASE_URL, newUser);
  return response.data;
};