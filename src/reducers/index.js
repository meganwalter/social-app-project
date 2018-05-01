import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import UserReducer from './reducer_users'
import { POST_COMMENT } from '../actions'

const rootReducer = combineReducers({
  users: UserReducer,
  form: formReducer
});

export default rootReducer;
