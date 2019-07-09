import { POSTS } from "./types";

export const getPosts = (posts) => ({
  type: POSTS.LOAD_SUCCESS,
  payload: posts
})

export const errorPost = (error) => ({
  type: POSTS.LOAD_FAIL,
  payload: error
})

export const loadPosts = () => ({
  type: POSTS.LOAD,
})

export const reqCrePost = (post) => ({
  type: POSTS.CREATE_PENDING,
  payload: post
})
export const createPost = (post) => ({
  type: POSTS.CREATE_SUCCESS,
  payload: post
})