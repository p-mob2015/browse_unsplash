import { call, put } from 'redux-saga/effects';

import ImagesService from 'services/images';
import { LOAD_IMAGES, SET_IMAGES_LOAD_PARAMS, SET_IMAGES_HAS_MORE } from '../actions/images';

export function* loadImages({ params }) {
  try {
    const res = yield call(ImagesService.loadImages, params);

    yield put({
      type: `${LOAD_IMAGES}_SUCCESS`,
      result: res,
    });
    yield put({ type: SET_IMAGES_LOAD_PARAMS, params });

    if (res.length < params['per_page']) {
      yield put({ type: SET_IMAGES_HAS_MORE, hasMore: false });
    }
  } catch (error) {
    yield put({ type: `${LOAD_IMAGES}_FAILURE`, error });
    yield put({ type: SET_IMAGES_HAS_MORE, hasMore: false });
  }
}
