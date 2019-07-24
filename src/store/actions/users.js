export const SEARCH_USERS = 'USERS_SEARCH';
export const RESET_USERS = 'USERS_RESET';
export const SET_USERS_SEARCH_PARAMS = 'USERS_SET_SEARCH_PARAMS';
export const SET_USERS_TOTAL_PAGES = 'USERS_SET_TOTAL_PAGES';
export const SET_CURRENT_USER = 'USERS_SET_CURRENT';

export const searchUsers = params => ({
  type: SEARCH_USERS,
  params,
});

export const setUsersSearchParams = params => ({
  type: SET_USERS_SEARCH_PARAMS,
  params,
});

export const setUsersTotalPages = totalPages => ({
  type: SET_USERS_TOTAL_PAGES,
  totalPages,
});

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  user,
});

export const resetUsers = () => ({
  type: RESET_USERS,
});
