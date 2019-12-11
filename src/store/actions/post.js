import * as FileSystem from 'expo-file-system';
import { LOAD_POSTS, TOGGLE_BOOKMARK, REMOVE_POST, ADD_POST } from '../types';
import database from '../../database';

export const loadPosts = () => async dispatch =>
  dispatch({
    type: LOAD_POSTS,
    payload: await database.getPosts()
  });

export const toggleBookmark = post => async dispatch => {
  await database.updatePost(post);
  dispatch({
    type: TOGGLE_BOOKMARK,
    id: post.id
  });
};

export const removePost = id => async dispatch => {
  await database.removePost(id);
  dispatch({
    type: REMOVE_POST,
    id
  });
};

export const addPost = post => async dispatch => {
  const fileName = post.img.split('/').pop();
  const newPath = FileSystem.documentDirectory + fileName;

  try {
    await FileSystem.moveAsync({
      from: post.img,
      to: newPath
    });
  } catch (e) {
    console.log(e);
  }

  const payload = { ...post, img: newPath };
  const id = await database.createPost(payload);
  payload.id = id;

  dispatch({
    type: ADD_POST,
    payload
  });
};
