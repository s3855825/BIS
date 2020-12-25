import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../config/colors';

import ScreenHeader from '../components/ScreenHeader';
import Screen from '../components/Screen';
import SearchBar from '../components/SearchBar';
import PostList from '../components/PostList';
import ModButton from '../components/ModButton';
import storeToken from '../api/token';
import storeID from '../api/id';

export default function DashboardScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <ScreenHeader>Dashboard</ScreenHeader>
      <View style={styles.body}>
        <View style={styles.searchArea}>
          <SearchBar />
        </View>
        <View>
          <ModButton
            title='Create Posts'
            onPress={() => navigation.navigate('CreatePosts')}
          />
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
    padding: 20,
  },
  searchArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  postArea: {
    flex: 5,
    marginBottom: 10,
    paddingTop: 10
  },
});
