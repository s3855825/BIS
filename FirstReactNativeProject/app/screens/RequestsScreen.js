import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import 'react-native-gesture-handler';

import colors from '../config/colors';

import PostRequestList from '../components/PostRequestList';
import ScreenHeader from '../components/ScreenHeader';
import Screen from '../components/Screen';

export default function App() {
  return (
    <Screen style={styles.container}>
      <ScreenHeader>Requests</ScreenHeader>
      <View style={styles.body}>
        <View style={styles.postArea}>
          <View>
            <PostRequestList />
          </View>
        </View>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.screen
  },
  body: {
    flex: 1,
  },
  searchArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  postArea: {
    flex: 4,
    marginTop: 50,
    marginBottom: 10
  },
});
