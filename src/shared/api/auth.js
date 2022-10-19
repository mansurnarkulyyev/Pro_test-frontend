import { instance } from "./api";

const setToken = (token = "") => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = "";
};

export async function signup(data) {
  const { data: result } = await instance.post("/users/signup", data);
  return result;
}

export async function signin(data) {
  const { data: result } = await instance.post("/users/signin", data);
  setToken(result.token);
  return result;
}

export function logout() {
  setToken("");
}

export async function getCurrent(token) {
  try {
    setToken(token);
    const { data: result } = await instance.get("users/current");

    return result;
  } catch (error) {
    setToken("");
    throw error;
  }
}

export default instance;
