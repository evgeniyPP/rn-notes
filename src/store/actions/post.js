import { LOAD_POSTS, TOGGLE_BOOKMARK, REMOVE_POST, ADD_POST } from '../types';
import data from '../../data';

export const loadPosts = () => {
  return {
    type: LOAD_POSTS,
    payload: data
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
