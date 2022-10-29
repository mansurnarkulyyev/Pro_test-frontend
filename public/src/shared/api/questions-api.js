import { instance } from "./api";

export const fetchQuestions = async (kind) => {
  const { data } = await instance(`/questions/${kind}`);
  return data.questions;
};

export const postResults = async (body) => {
  await instance.post("/users/results", body);
};

export const fetchResults = async (kind) => {
  const { data } = await instance(`users/results/${kind}`);
  return data;
};
