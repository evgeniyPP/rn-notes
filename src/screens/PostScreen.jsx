import React, { useEffect, useCallback } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Button, Alert } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch, useSelector } from 'react-redux';
import AppHeaderIcon from '../components/AppHeaderIcon';
import { toggleBookmark, removePost } from '../store/actions/post';
import theme from '../theme';

const PostScreen = ({ navigation }) => {
  const postId = navigation.getParam('postId');
  const post = useSelector(state => state.post.allPosts.find(p => p.id === postId));
  const booked = useSelector(state => state.post.bookmarked.some(p => p.id === postId));

  useEffect(() => {
    navigation.setParams({ booked });
  }, [booked]);

  const dispatch = useDispatch();

  const toggleHandler = useCallback(() => {
    dispatch(toggleBookmark(post));
  }, [dispatch, post]);

  useEffect(() => {
    navigation.setParams({ toggleHandler });
  }, [toggleHandler]);

  const removeHandler = () => {
    Alert.alert('Удаление поста', 'Вы точно хотите удалить пост?', [
      {
        text: 'Отменить',
        style: 'cancel'
      },
      {
        text: 'Удалить',
        style: 'destructive',
        onPress() {
          navigation.navigate('Main');
          dispatch(removePost(postId));
        }
      }
    ]);
  };

  if (!post) return null;

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
  const booked = navigation.getParam('booked');
  const toggleHandler = navigation.getParam('toggleHandler');
  const icon = booked ? 'ios-star' : 'ios-star-outline';

  return {
    headerTitle: `Пост №${postId} от ${postDate}`,
    headerStyle: {
      backgroundColor: theme.mainColor
    },
    headerTintColor: '#fff',
    headerRight: (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item title="Сделать фото" iconName={icon} onPress={toggleHandler} />
      </HeaderButtons>
    )
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
