import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addPost } from '../store/actions/post';
import MainScreen from './MainScreen';
import PhotoPicker from '../components/PhotoPicker';
import theme from '../theme';

const CreateScreen = ({ navigation }) => {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const createPostHandler = () => {
    dispatch(
      addPost({
        img: image,
        text,
        date: new Date().toJSON(),
        booked: false
      })
    );
    navigation.navigate('Main');
  };

  const photoPickHandler = uri => setImage(uri);

  return (
    <ScrollView style={css.wrapper}>
      <View>
        <Text style={css.title}>Создать новый пост</Text>
        <TextInput
          style={css.textarea}
          placeholder="Введите текст поста"
          value={text}
          onChangeText={setText}
          multiline
        />
        <PhotoPicker onPick={photoPickHandler} />
        <Button
          title="Создать пост"
          color={theme.mainColor}
          onPress={createPostHandler}
          disabled={!text || !image}
        />
      </View>
    </ScrollView>
  );
};

CreateScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Создать пост',
  headerLeft: MainScreen.navigationOptions({ navigation }).headerLeft
});

const css = StyleSheet.create({
  wrapper: {
    padding: 10
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'open-regular',
    marginVertical: 10
  },
  textarea: {
    marginVertical: 15
  }
});

export default CreateScreen;
