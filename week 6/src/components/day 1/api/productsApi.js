import axios from "axios";

export const fetchProducts = () => {
  return axios
    .get("https://randomuser.me/api/?results=9")
    .then((res) => res.data.results);
};