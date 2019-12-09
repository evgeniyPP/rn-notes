import React from 'react';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';
import MainScreen from '../screens/MainScreen';
import PostScreen from '../screens/PostScreen';
import BookmarkedScreen from '../screens/BookmarkedScreen';
import AboutScreen from '../screens/AboutScreen';
import CreateScreen from '../screens/CreateScreen';
import theme from '../theme';

const isAndroid = Platform.OS === 'android';
const navigatorOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: isAndroid ? theme.mainColor : '#fff'
    },
    headerTintColor: isAndroid ? '#fff' : theme.mainColor
  }
};

const PostNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Post: PostScreen
  },
  navigatorOptions
);

const BookmarkedNavigator = createStackNavigator(
  {
    Bookmarked: BookmarkedScreen,
    Post: PostScreen
  },
  navigatorOptions
);

const AboutNavigator = createStackNavigator(
  {
    About: AboutScreen
  },
  navigatorOptions
);

const CreateNavigator = createStackNavigator(
  {
    Create: CreateScreen
  },
  navigatorOptions
);

const bottomTabNavigator = isAndroid ? createMaterialBottomTabNavigator : createBottomTabNavigator;
const bottomTabNavigatorOptions = isAndroid
  ? {
      activeTintColor: '#fff',
      shifting: true,
      barStyle: {
        backgroundColor: theme.mainColor
      }
    }
  : {
      tabBarOptions: {
        activeTintColor: theme.mainColor
      }
    };

const BottomNavigator = bottomTabNavigator(
  {
    Post: {
      screen: PostNavigator,
      navigationOptions: {
        tabBarLabel: 'Все посты',
        tabBarIcon: info => <Ionicons name="ios-albums" size={25} color={info.tintColor} />
      }
    },
    Bookmarked: {
      screen: BookmarkedNavigator,
      navigationOptions: {
        tabBarLabel: 'Избранное',
        tabBarIcon: info => <Ionicons name="ios-star" size={25} color={info.tintColor} />
      }
    }
  },
  bottomTabNavigatorOptions
);

const mainNavigator = createDrawerNavigator(
  {
    PostTabs: {
      screen: BottomNavigator,
      navigationOptions: {
        drawerLabel: 'Главная'
      }
    },
    About: {
      screen: AboutNavigator,
      navigationOptions: {
        drawerLabel: 'О приложении'
      }
    },
    Create: {
      screen: CreateNavigator,
      navigationOptions: {
        drawerLabel: 'Новый пост'
      }
    }
  },
  {
    contentOptions: {
      activeTintColor: theme.mainColor,
      labelStyle: {
        fontFamily: 'open-bold',
        fontSize: 20
      }
    }
  }
);

export default createAppContainer(mainNavigator);
