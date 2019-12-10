import { LOAD_POSTS, TOGGLE_BOOKMARK } from '../types';
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
