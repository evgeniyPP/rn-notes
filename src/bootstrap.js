import * as Font from 'expo-font';
import database from './database';

export default async () => {
  try {
    await Font.loadAsync({
      'open-regular': require('../assets/fonts/OpenSans-Regular.ttf'),
      'open-bold': require('../assets/fonts/OpenSans-Bold.ttf')
    });
    await database.init();
  } catch (e) {
    console.log('Error: ', e);
  }
};
