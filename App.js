import React from 'react';
import { StatusBar } from 'expo-status-bar';
// import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={WelcomeScreen} />
        <Stack.Screen name="View Image" component={ViewImageScreen} />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}
