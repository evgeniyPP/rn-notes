import { LOAD_POSTS } from '../types';

const initialState = {
  allPosts: [],
  bookmarked: []
};

const handlers = {
  [LOAD_POSTS]: (state, { payload }) => ({
    ...state,
    allPosts: payload,
    bookmarked: payload.filter(post => post.booked)
  }),
  DEFAULT: state => state
};

export default (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
