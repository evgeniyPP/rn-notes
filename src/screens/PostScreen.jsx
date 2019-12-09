import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Button, Alert } from 'react-native';
import DATA from '../data';
import theme from '../theme';

const PostScreen = ({ navigation }) => {
  const postId = navigation.getParam('postId');
  const post = DATA.find(p => p.id === postId);

  const removeHandler = () => {
    Alert.alert('Удаление поста', 'Вы точно хотите удалить пост?', [
      {
        text: 'Отменить',
        style: 'cancel'
      },
      {
        text: 'Удалить',
        style: 'destructive',
        onPress: () => {}
      }
    ]);
  };

  return (
    <ScrollView>
      <Image source={{ uri: post.img }} style={css.image} />
      <View style={css.textWrap}>
        <Text>{post.text}</Text>
      </View>
      <Button title="Удалить" color={theme.dangerColor} onPress={removeHandler} />
    </ScrollView>
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
  image: {
    width: '100%',
    height: 200
  },
  textWrap: {
    padding: 10
  },
  title: {
    fontFamily: 'open-regular'
  }
});

export default PostScreen;
