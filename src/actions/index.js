import axios from 'axios';

export const FETCH_USERS = 'fetch_users';
export const UPDATE_USER = 'update_user';

const ROOT_URL = 'https://megan-bh-interview.now.sh/users/';

export function fetchUsers() {
  const request = axios.get(ROOT_URL);

  return {
    type: FETCH_USERS,
    payload: request
  };
}

export function sendComment(data) {
  return {
    type: UPDATE_USER,
    payload: data.data.data
  }
}

export function postComment(values, id) {
  return axios.post(`${ROOT_URL}${id}/posts`, values)
  .then((data) => sendComment(data))
}
