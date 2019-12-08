import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from '../screens/MainScreen';
import PostScreen from '../screens/PostScreen';
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

export default createAppContainer(PostNavigator);
