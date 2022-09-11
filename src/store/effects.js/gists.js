import { loading, searchGistsByUsername, searchForksById, error } from "../actions/gists";
const BASE_URL = "https://api.github.com";

export const fetchGistsByUsername = (username) => {
  return async (dispatch) => {
    dispatch(loading());
    const response = await fetch(`${BASE_URL}/users/${username}/gists`);
    if (!response.ok) {
      return dispatch(error(`HTTP error! status: ${response.status}`));
    }
    const data = await response.json();
    console.log("data", data);
    if (data.length > 0) {
      return dispatch(searchGistsByUsername(data));
    } else {
      return dispatch(error(`Could not found gists for ${username}`));
    }
  };
};

export const fetchForks = (gistId) => {
  return async (dispatch) => {
    dispatch(loading());
    const response = await fetch(`${BASE_URL}/gists/${gistId}/forks`);
    if (!response.ok) {
      return dispatch(error(`HTTP error! status: ${response.status}`));
    }
    const data = await response.json();
    if (data.length > 0) {
      return dispatch(searchForksById(data));
    } else {
      return dispatch(error(`Could not found forks for ${gistId}`));
    }
  };
};
