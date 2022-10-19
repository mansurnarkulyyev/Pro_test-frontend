import { instance } from "./api";

export const fetchQuestions = async (kind) => {
  const { data } = await instance(`/questions/${kind}`);
  return data.questions;
};

export const getQuestionById = async (kind, id) => {
  const { data } = await instance(`/questions/${kind}/${id}`);
  return data;
};
