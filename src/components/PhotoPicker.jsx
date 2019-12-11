import React, { useState } from 'react';
import { View, StyleSheet, Image, Button, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import theme from '../theme';

const askPermissions = async () => {
  const { status } = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
  if (status !== 'granted') {
    Alert.alert(
      'No money, no honey',
      'Для использования камеры, нам нужно получить к ней доступ, duh!'
    );
    return false;
  }
  return true;
};

export default ({ onPick }) => {
  const [image, setImage] = useState(null);

  const takePhoto = async () => {
    const isPermissions = await askPermissions();
    if (!isPermissions) return;
    const img = await ImagePicker.launchCameraAsync({
      quality: 0.7,
      allowsEditing: false,
      aspect: [16, 9]
    });
    setImage(img.uri);
    onPick(img.uri);
  };

  return (
    <View style={css.wrapper}>
      <Button style={css.btn} title="Сделать фото" onPress={takePhoto} color={theme.mainColor} />
      {image && <Image style={css.image} source={{ uri: image }} />}
    </View>
  );
};

const css = StyleSheet.create({
  wrapper: {
    marginBottom: 10
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 10
  },
  btn: {
    width: '70%'
  }
});
