import * as actions from "./remoteResults-actions";
import { fetchResults } from "../../../shared/api/questions-api";

export const setResults = (kind) => {
  const func = async (dispatch) => {
    dispatch(actions.fetchResultsRequest());
    try {
      const results = await fetchResults(kind);
      dispatch(actions.fetchResultsSuccess(results));
    } catch (error) {
      dispatch(actions.fetchResultsError(error));
    }
  };
  return func;
};
