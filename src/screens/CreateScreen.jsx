import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet, Image, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addPost } from '../store/actions/post';
import MainScreen from './MainScreen';
import theme from '../theme';

const CreateScreen = ({ navigation }) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const img =
    'https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg';

  const createPostHandler = () => {
    dispatch(
      addPost({
        id: Date.now().toString(),
        img,
        text,
        date: new Date().toJSON(),
        booked: false
      })
    );
    navigation.navigate('Main');
  };

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
        <Image
          style={{ width: '100%', height: 200, marginBottom: 10 }}
          source={{
            uri: img
          }}
        />
        <Button title="Создать пост" color={theme.mainColor} onPress={createPostHandler} />
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
  textarea: {}
});

export default CreateScreen;
