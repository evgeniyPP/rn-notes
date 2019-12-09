import React from 'react';
import MainScreen from './MainScreen';
import DATA from '../data';

const BookmarkedScreen = ({ navigation }) => (
  <MainScreen navigation={navigation} data={DATA.filter(post => post.booked)} />
);

BookmarkedScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Избранные посты',
  headerRight: MainScreen.navigationOptions({ navigation }).headerRight,
  headerLeft: MainScreen.navigationOptions({ navigation }).headerLeft
});

export default BookmarkedScreen;
