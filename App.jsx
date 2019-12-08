import React, { useState } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import AppNavigation from './src/navigation/AppNavigation';
import bootstap from './src/bootstap';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return <AppLoading startAsync={bootstap} onFinish={setIsReady(true)} />;
  }

  return <AppNavigation />;
}
