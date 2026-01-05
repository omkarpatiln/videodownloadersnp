import { View, Text } from 'react-native';
import React from 'react';
import Oldcode from './src/Components/Oldcode';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import { NavigationContainer } from '@react-navigation/native';
import AuthRoute from './src/route/AuthRoute';

const App = () => {
  return (
    <NavigationContainer>
      <AuthRoute />
    </NavigationContainer>
  );
};

export default App;
