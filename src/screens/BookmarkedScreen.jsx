import React from 'react';
import MainScreen from './MainScreen';
import DATA from '../data';

const BookmarkedScreen = ({ navigation }) => (
  <MainScreen navigation={navigation} data={DATA.filter(post => post.booked)} />
);

BookmarkedScreen.navigationOptions = {
  headerTitle: 'Избранные посты',
  headerRight: MainScreen.navigationOptions.headerRight,
  headerLeft: MainScreen.navigationOptions.headerLeft
};

export default BookmarkedScreen;
