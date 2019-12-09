import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import theme from '../theme';

const isAndroid = Platform.OS === 'android';

export default props => (
  <HeaderButton
    {...props}
    IconComponent={Ionicons}
    iconSize={30}
    color={isAndroid ? '#fff' : theme.mainColor}
  />
);
