import axios from "axios";

const instance = axios.create({
  baseURL: "...",
});
const setToken = (token = "") => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = "";
};

export async function signup(data) {
  const { data: result } = await instance.post("/auth/signup", data);
  return result;
}

export async function signin(data) {
  const { data: result } = await instance.post("/auth/signin", data);
  setToken(result.accessToken);
  return result;
}

export function logout() {
  setToken("");
}

export async function getCurrent(token) {
  try {
    setToken(token);
    const { data: result } = await instance.get("/user");

    return result;
  } catch (error) {
    setToken("");
    throw error;
  }
}

export default instance;
