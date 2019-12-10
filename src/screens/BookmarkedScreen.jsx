import React from 'react';
import { useSelector } from 'react-redux';
import MainScreen from './MainScreen';

const BookmarkedScreen = ({ navigation }) => {
  const bookmarked = useSelector(state => state.post.bookmarked);

  return <MainScreen navigation={navigation} data={bookmarked} />;
};

BookmarkedScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Избранные посты',
  headerRight: MainScreen.navigationOptions({ navigation }).headerRight,
  headerLeft: MainScreen.navigationOptions({ navigation }).headerLeft
});

export default BookmarkedScreen;
