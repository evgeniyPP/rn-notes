import React from 'react';
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native';

export default ({ post, onOpen }) => (
  <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(post)}>
    <View style={css.post}>
      <ImageBackground style={css.image} source={{ uri: post.img }}>
        <View style={css.textWrap}>
          <Text style={css.title}>{new Date(post.date).toLocaleDateString()}</Text>
        </View>
      </ImageBackground>
    </View>
  </TouchableOpacity>
);

const css = StyleSheet.create({
  post: {
    marginBottom: 15,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 200
  },
  textWrap: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 5,
    alignItems: 'center',
    width: '100%'
  },
  title: {
    color: '#fff',
    fontFamily: 'open-regular'
  }
});
