import { FETCH_USERS, SEND_COMMENT, UPDATE_USER } from '../actions';
import _ from 'lodash';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_USERS:
      const objectData = { ... action.payload.data.data};
      return _.mapKeys(objectData, 'id')
    case UPDATE_USER:
      console.log('done!')
      return state;
    default:
      return state;
  }
}
