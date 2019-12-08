import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BookmarkedScreen = ({}) => {
  return (
    <View style={css.center}>
      <Text>Bookmarked Screen</Text>
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

export default BookmarkedScreen;
