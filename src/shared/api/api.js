import axios from "axios";

export const instance = axios.create({
  baseURL: "https://pro-test-b.herokuapp.com/api",
  // baseURL: "http://localhost:3004/api",
});
