import { instance } from "./api";

export async function getList() {
  const { data: result } = await instance.get("/materials");
  return result;
}

export async function addItem(data) {
  const { data: result } = await instance.post("/materials/add", data);
  return result;
}

export async function deleteItem(data) {
  const { data: result } = await instance.post(`/materials/${data}`);
  return result;
}
