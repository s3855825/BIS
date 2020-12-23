import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../config/colors';

import ScreenHeader from '../components/ScreenHeader';
import Screen from '../components/Screen';
import GroupMembers from "../components/GroupMembers"

export default function App() {
  return (
    <Screen style={styles.container}>
      <ScreenHeader>Group Name</ScreenHeader>
      <View style={styles.postArea}>
          <GroupMembers />
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
  
  postArea: {
    flex: 4,
    marginBottom: 10
  },
});
