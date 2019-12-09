import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainScreen from './MainScreen';

const CreateScreen = () => {
  return (
    <View style={css.center}>
      <Text>Create Screen</Text>
    </View>
  );
};

CreateScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Создать пост',
  // headerRight: MainScreen.navigationOptions({ navigation }).headerRight,
  headerLeft: MainScreen.navigationOptions({ navigation }).headerLeft
});

const css = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CreateScreen;
