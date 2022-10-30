import { instance } from "./api";

export async function addContact(userData) {
  const { data: result } = await instance.post("/contacts/add", userData,{headers:{"Content-Type":"multipart/form-data"}});
  return result;
}

export const getContactsList = async (_page = 1) => {
  const { data } = await instance.get("/contacts", {
    params: {
      _page,
    },
  });
  return data;
};
export const deleteContactsList = async (id) => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};
