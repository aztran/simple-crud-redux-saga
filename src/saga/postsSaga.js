import { call, put } from 'redux-saga/effects';
import { fetchPosts, insertPost } from '../api';
import { POSTS } from '../actions/types';
import { getPosts, errorPost } from '../actions';

export function* handlePosts() {

  try {
    const data = yield call(fetchPosts);
    console.log(data);
    yield put(getPosts(data))
  } catch (error) {

  }
}

export function* createPost(action) {
  const newPost = yield call(insertPost, action.payload);
  yield put({ type: POSTS.CREATE_SUCCESS, payload: newPost });
}