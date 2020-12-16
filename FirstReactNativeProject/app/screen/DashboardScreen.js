import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../config/colors';

import ScreenHeader from '../components/ScreenHeader';
import Screen from '../components/Screen';
import SearchBar from '../components/SearchBar';
import PostList from '../components/PostList';


export default function App() {
  return (
    <Screen style={styles.container}>
      <ScreenHeader>Dashboard</ScreenHeader>
      <View style={styles.body}>
        <View style={styles.searchArea}>
          <SearchBar />
        </View>
        <View style={styles.postArea}>
          <View>
            <PostList />
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
    marginBottom: 10
  },
});
