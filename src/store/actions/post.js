import { LOAD_POSTS, TOGGLE_BOOKMARK, REMOVE_POST, ADD_POST } from '../types';
import database from '../../database';

export const loadPosts = () => {
  return async dispatch => {
    const posts = await database.getPosts();
    dispatch({
      type: LOAD_POSTS,
      payload: posts
    });
  };
};

export const toggleBookmark = id => {
  return {
    type: TOGGLE_BOOKMARK,
    id
  };
};

export const removePost = id => {
  return {
    type: REMOVE_POST,
    id
  };
};

export const addPost = post => {
  return {
    type: ADD_POST,
    post
  };
};
