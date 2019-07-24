import { SEARCH_USERS, SET_USERS_SEARCH_PARAMS, SET_USERS_TOTAL_PAGES, SET_CURRENT_USER, RESET_USERS } from '../actions/users';
import { users as defaultState } from './defaultState';
import { remoteReducerIncremental } from './base';

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        current: action.user,
      };
    case SET_USERS_SEARCH_PARAMS:
      return {
        ...state,
        params: action.params,
      };
    case SET_USERS_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.totalPages,
      };
    case RESET_USERS:
      return {
        ...state,
        data: [],
        isLoaded: false,
      };
    default:
      return remoteReducerIncremental(SEARCH_USERS, state, action);
  }
};

export default reducer;
