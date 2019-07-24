import get from 'lodash/get';

export const nextParams = state => {
  return {
    ...state.params,
    page: get(state.params, 'page', 0) + 1,
  };
}

export const hasMore = state => {
  return get(state.params, 'page', 0) !== state.totalPages;
}
