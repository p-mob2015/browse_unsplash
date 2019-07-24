export const LOAD_IMAGES = 'IMAGES_LOAD';
export const RESET_IMAGES = 'IMAGES_RESET';
export const SET_IMAGES_LOAD_PARAMS = 'SET_IMAGES_LOAD_PARAMS';
export const SET_IMAGES_HAS_MORE = 'SET_IMAGES_HAS_MORE';

export const loadImages = params => ({
  type: LOAD_IMAGES,
  params,
});

export const setImagesLoadParams = params => ({
  type: SET_IMAGES_LOAD_PARAMS,
  params,
});

export const setImagesHasMore = hasMore => ({
  type: SET_IMAGES_HAS_MORE,
  hasMore,
});

export const resetImages = () => ({
  type: RESET_IMAGES,
});
