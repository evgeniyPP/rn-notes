import { LOAD_POSTS } from '../types';
import data from '../../data';

export const loadPosts = () => {
  return {
    type: LOAD_POSTS,
    payload: data
  };
};
