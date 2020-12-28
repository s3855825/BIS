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

import GroupList from '../components/GroupList';
import ScreenHeader from '../components/ScreenHeader';
import Screen from '../components/Screen';
import SearchBar from '../components/SearchBar';
import ModButton from '../components/ModButton';

export default function App() {
    return (
        <Screen style={styles.container}>
            <ScreenHeader title='Group' />
            <View style={styles.body}>
                <View style={styles.searchArea}>
                    <SearchBar />
                </View>
                <View style={styles.postArea}>
                    <GroupList />
                </View>
            </View>
        </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
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

