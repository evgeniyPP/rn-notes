import React from 'react';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import MainScreen from '../screens/MainScreen';
import PostScreen from '../screens/PostScreen';
import BookmarkedScreen from '../screens/BookmarkedScreen';
import theme from '../theme';

const isAndroid = Platform.OS === 'android';

const PostNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Post: {
      screen: PostScreen
    }
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: isAndroid ? theme.mainColor : '#fff'
      },
      headerTintColor: isAndroid ? '#fff' : theme.mainColor
    }
  }
);

const BookmarkedNavigator = createStackNavigator(
  {
    Bookmarked: BookmarkedScreen,
    Post: PostScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: isAndroid ? theme.mainColor : '#fff'
      },
      headerTintColor: isAndroid ? '#fff' : theme.mainColor
    }
  }
);

const BottomNavigator = createBottomTabNavigator(
  {
    'Все посты': {
      screen: PostNavigator,
      navigationOptions: {
        tabBarIcon: info => <Ionicons name="ios-albums" size={25} color={info.tintColor} />
      }
    },
    Избранное: {
      screen: BookmarkedNavigator,
      navigationOptions: {
        tabBarIcon: info => <Ionicons name="ios-star" size={25} color={info.tintColor} />
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: theme.mainColor
    }
  }
);

export default createAppContainer(BottomNavigator);
