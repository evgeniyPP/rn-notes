import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CreateScreen = ({}) => {
  return (
    <View style={css.center}>
      <Text>Create Screen</Text>
    </View>
  );
};

const css = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CreateScreen;
