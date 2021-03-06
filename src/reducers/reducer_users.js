import { FETCH_USERS, UPDATE_USER } from '../actions';
import _ from 'lodash';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_USERS:
      const objectData = {...action.payload.data.data};
      return _.mapKeys(objectData, 'id')
    case UPDATE_USER:
      return Object.assign({}, state, {
        [action.payload.id] : action.payload
      });
    default:
      return state;
  }
}
