import * as constants from "../contants/gists";

const INITIAL_STATE = {
  gists: [],
  forks: [],
  loading: false,
  error: ""
};

export const gists = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constants.LOADING:
      return { ...state, loading: true };
    case constants.SEARCH_GISTS:
      return { ...state, gists: action.payload, loading: false, error: "" };
    case constants.SEARCH_FORKS:
      return { ...state, forks: action.payload, loading: false, error: "" };
    case constants.ERROR:
      return { ...state, loading: false, error: action.payload };
    case constants.CLEAR:
      return { ...state, loading: false, error: "", forks: [] };
    default:
      return state;
  }
};
