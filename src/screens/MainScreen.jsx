import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../components/Post';
import AppHeaderIcon from '../components/AppHeaderIcon';
import { loadPosts } from '../store/actions/post';

const MainScreen = ({ navigation, data }) => {
  const openPostHandler = post => {
    navigation.navigate('Post', { postId: post.id, date: post.date, booked: post.booked });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  const allPosts = useSelector(state => state.post.allPosts);
  if (!data) data = allPosts;

  return (
    <View style={css.wrapper}>
      <FlatList
        data={data}
        keyExtractor={post => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={openPostHandler} />}
      />
    </View>
  );
};

MainScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Блог на React Native',
  headerRight: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item title="Сделать фото" iconName="ios-camera" onPress={() => navigation.push('Create')} />
    </HeaderButtons>
  ),
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item title="Сделать фото" iconName="ios-menu" onPress={() => navigation.toggleDrawer()} />
    </HeaderButtons>
  )
});

const css = StyleSheet.create({
  wrapper: {
    padding: 10
  }
});

export default MainScreen;
