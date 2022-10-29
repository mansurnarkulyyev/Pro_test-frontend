import { createAction } from "@reduxjs/toolkit";

export const fetchResultsRequest = createAction("results/fetch/request");
export const fetchResultsSuccess = createAction("results/fetch/success");
export const fetchResultsError = createAction("results/fetch/error");
