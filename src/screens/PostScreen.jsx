import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PostScreen = ({ navigation }) => {
  const postId = navigation.getParam('postId');
  return (
    <View style={css.center}>
      <Text>{postId}</Text>
    </View>
  );
};

PostScreen.navigationOptions = ({ navigation }) => {
  const postId = navigation.getParam('postId');
  const postDate = new Date(navigation.getParam('date')).toLocaleDateString();
  return {
    headerTitle: `Пост №${postId} от ${postDate}`,
    headerStyle: {
      backgroundColor: '#050404'
    },
    headerTintColor: '#fff'
  };
};

const css = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default PostScreen;
