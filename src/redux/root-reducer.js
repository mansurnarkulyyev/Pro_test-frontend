import { combineReducers } from "@reduxjs/toolkit";
import addQuestionsKindReducer from "./questions/questionsKind/questionsKind-reducer";

const rootReducer = combineReducers({
  questionsKind: addQuestionsKindReducer,
});

export default rootReducer;
