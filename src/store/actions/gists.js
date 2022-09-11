import * as constants from "../contants/gists";

export const searchGistsByUsername = (data) => ({
  type: constants.SEARCH_GISTS,
  payload: data,
});

export const searchForksById = (data) => ({
  type: constants.SEARCH_FORKS,
  payload: data,
});

export const clear = () => ({
  type: constants.CLEAR,
});


export const loading = (boolean) => ({
  type: constants.LOADING,
  payload: boolean,
});

export const error = (message) => ({
  type: constants.ERROR,
  payload: message,
});

