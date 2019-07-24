import { call, put } from 'redux-saga/effects';

import UsersService from 'services/users';
import { SEARCH_USERS, SET_USERS_SEARCH_PARAMS, SET_USERS_TOTAL_PAGES } from '../actions/users';

export function* searchUsers({ params }) {
  try {
    const res = yield call(UsersService.searchUsers, params);

    yield put({
      type: `${SEARCH_USERS}_SUCCESS`,
      result: res.results,
    });
    yield put({ type: SET_USERS_SEARCH_PARAMS, params });
    yield put({ type: SET_USERS_TOTAL_PAGES, totalPages: res['total_pages']})
  } catch (error) {
    yield put({ type: `${SEARCH_USERS}_FAILURE`, error });
  }
}
