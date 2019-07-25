import { LOAD_IMAGES, SET_IMAGES_LOAD_PARAMS, SET_IMAGES_HAS_MORE, RESET_IMAGES } from '../actions/images';
import { images as defaultState } from './defaultState';
import { remoteReducerIncremental } from './base';

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_IMAGES_LOAD_PARAMS:
      return {
        ...state,
        params: action.params,
      };
    case SET_IMAGES_HAS_MORE:
      return {
        ...state,
        hasMore: action.hasMore,
      };
    case RESET_IMAGES:
      return {
        ...state,
        data: [],
        isLoaded: false,
        hasMore: true,
      };
    default:
      return remoteReducerIncremental(LOAD_IMAGES, state, action);
  }
};

export default reducer;
