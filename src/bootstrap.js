import * as Font from 'expo-font';
import { Alert } from 'react-native';
import database from './database';

export default async () => {
  try {
    await Font.loadAsync({
      'open-regular': require('../assets/fonts/OpenSans-Regular.ttf'),
      'open-bold': require('../assets/fonts/OpenSans-Bold.ttf')
    });
    await database.init();
  } catch (e) {
    Alert.alert('Возникла ошибка', e);
  }
};
