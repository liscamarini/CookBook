import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes/App.routes';

const App = () => (
  <>
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#8B0000" />

      <Routes />
    </NavigationContainer>
  </>
);

export default App;
