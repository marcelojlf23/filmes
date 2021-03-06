import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Routes />
    </NavigationContainer>
  );
}

export default App;