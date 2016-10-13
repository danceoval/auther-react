import { combineReducers } from 'redux';
import users from './users';
import stories from './stories';
import auth from './auth';

export default combineReducers({
  users,
  stories,
  currentUser: auth
});