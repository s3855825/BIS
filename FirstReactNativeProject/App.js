import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './app/screens/LoginScreen';
import GroupsScreen from './app/screens/GroupsScreen';
import RequestsScreen from './app/screens/RequestsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  return (
    <LoginScreen />
  );
}

export default App;
