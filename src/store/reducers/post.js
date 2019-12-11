import { LOAD_POSTS, TOGGLE_BOOKMARK, REMOVE_POST, ADD_POST } from '../types';

const initialState = {
  allPosts: [],
  bookmarked: [],
  loading: true
};

const handlers = {
  [LOAD_POSTS]: (state, { payload }) => ({
    ...state,
    allPosts: payload,
    bookmarked: payload.filter(post => post.booked),
    loading: false
  }),
  [TOGGLE_BOOKMARK]: (state, { id }) => {
    const allPosts = state.allPosts.map(post =>
      post.id === id ? { ...post, booked: !post.booked } : post
    );
    return {
      ...state,
      allPosts,
      bookmarked: allPosts.filter(post => post.booked)
    };
  },
  [REMOVE_POST]: (state, { id }) => ({
    ...state,
    allPosts: state.allPosts.filter(post => post.id !== id),
    bookmarked: state.bookmarked.filter(post => post.id !== id)
  }),
  [ADD_POST]: (state, { payload }) => ({
    ...state,
    allPosts: [payload, ...state.allPosts]
  }),
  DEFAULT: state => state
};

export default (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
