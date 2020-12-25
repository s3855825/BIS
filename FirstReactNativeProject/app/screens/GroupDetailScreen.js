import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import colors from '../config/colors';
import ScreenHeader from '../components/ScreenHeader';
import Screen from '../components/Screen';
import Tasks from "../components/Tasks"
import GroupList from '../components/GroupMembers';


export default function GroupDetailScreen() {
  return (
    <Screen style={styles.container}>
      <View style={styles.postArea}>
        <Text>Member</Text>
          <GroupList />
      </View>
      <View style={styles.task}>
        <Text style={styles.text}>
          Task
        </Text>
          <Tasks />
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
  text:{
    marginLeft: 20,

  },
  postArea: {
    marginTop: 50,
    marginBottom: 10
  },
  task: {
    flex: 10,
    marginBottom: 20
    
  }
});
