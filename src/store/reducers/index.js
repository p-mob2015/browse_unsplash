import { combineReducers } from 'redux';

import users from './users';
import images from './images';

export default combineReducers({
  users,
  images,
});
