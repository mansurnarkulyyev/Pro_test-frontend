import { createReducer } from "@reduxjs/toolkit";
import { addQuestionsKind } from "./questionsKind-actions";

const addQuestionsKindReducer = createReducer("", {
  [addQuestionsKind]: (_, { payload }) => payload,
});

export default addQuestionsKindReducer;
