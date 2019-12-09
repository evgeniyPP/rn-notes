import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Post from '../components/Post';
import AppHeaderIcon from '../components/AppHeaderIcon';
import DATA from '../data';

const MainScreen = ({ navigation }) => {
  const openPostHandler = post => {
    navigation.navigate('Post', { postId: post.id, date: post.date });
  };

  return (
    <View style={css.wrapper}>
      <FlatList
        data={DATA}
        keyExtractor={post => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={openPostHandler} />}
      />
    </View>
  );
};

MainScreen.navigationOptions = {
  headerTitle: 'Блог на React Native',
  headerRight: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item title="Сделать фото" iconName="ios-camera" onPress={() => console.log('Press Photo')} />
    </HeaderButtons>
  )
};

const css = StyleSheet.create({
  wrapper: {
    padding: 10
  }
});

export default MainScreen;
