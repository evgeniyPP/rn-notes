import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default ({}) => {
  return (
    <View style={css.center}>
      <Text>Main Screen</Text>
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
