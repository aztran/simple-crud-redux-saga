import { POSTS } from "../actions/types";

const initialState = {
  posts: null,
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'POSTS_LOAD':
      return {
        ...state
      }
    case POSTS.LOAD_SUCCESS:
      return {
        ...state,
        posts: action.payload
      }
    case POSTS.LOAD_FAIL:
      return {
        ...state,
        error: action.payload
      }
    case POSTS.CREATE_PENDING:
      return {
        ...state,
        loading: true,
      }
    case POSTS.CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: [...state.posts, action.payload]
      }
    default:
      return state;
  }

}