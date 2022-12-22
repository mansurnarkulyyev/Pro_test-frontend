import axios from "axios";

export const instance = axios.create({
  baseURL: "https://protest-backend-production.up.railway.app/api",
  // baseURL: "http://localhost:3004/api",
});
