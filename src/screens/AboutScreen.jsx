import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = ({}) => {
  return (
    <View style={css.center}>
      <Text>About Screen</Text>
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

export default AboutScreen;
