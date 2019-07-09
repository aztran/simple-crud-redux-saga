import { all, take, takeLatest, takeEvery } from 'redux-saga/effects';
import { POSTS } from '../actions/types';
import { handlePosts, createPost } from './postsSaga';


export default function* rootSaga() {

  yield all([
    takeEvery(POSTS.LOAD, handlePosts),
    takeLatest(POSTS.CREATE_PENDING, createPost)
  ])
}