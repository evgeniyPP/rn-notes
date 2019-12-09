import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainScreen from './MainScreen';

const AboutScreen = () => {
  return (
    <View style={css.center}>
      <Text style={css.text}>
        Приложение для личных постов с фотографиями, написанное с помощью React Native
      </Text>
      <Text style={css.text}>
        Автор:
        <Text style={css.bold}> Петрянкин Евгений</Text>
      </Text>
    </View>
  );
};

AboutScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'О приложении',
  headerRight: MainScreen.navigationOptions({ navigation }).headerRight,
  headerLeft: MainScreen.navigationOptions({ navigation }).headerLeft
});

const css = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    fontFamily: 'open-regular',
    fontSize: 20,
    marginBottom: 10
  },
  bold: {
    fontFamily: 'open-bold'
  }
});

export default AboutScreen;
