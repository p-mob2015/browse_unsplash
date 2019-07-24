import { takeLatest } from 'redux-saga/effects';

import { SEARCH_USERS } from '../actions/users';
import { LOAD_IMAGES } from '../actions/images';
import { searchUsers } from './users';
import { loadImages } from './images';

export default function* appSaga() {
  yield takeLatest(SEARCH_USERS, searchUsers);
  yield takeLatest(LOAD_IMAGES, loadImages);
}
