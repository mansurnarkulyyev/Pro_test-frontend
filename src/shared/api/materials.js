import { instance } from "./api";

export async function getListLiterature() {
  const { data: result } = await instance.get("/literature");
  return result;
}

export async function addItemLiterature(data) {
  const { data: result } = await instance.post("/literature/add", data);
  return result;
}

export async function deleteItemLiterature(data) {
  await instance.delete(`/literature/${data}`);
  return data;
}
export async function getListResources() {
  const { data: result } = await instance.get("/resources");
  return result;
}

export async function addItemResources(data) {
  const { data: result } = await instance.post("/resources/add", data);
  return result;
}

export async function deleteItemResources(data) {
  await instance.delete(`/resources/${data}`);
  return data;
}
