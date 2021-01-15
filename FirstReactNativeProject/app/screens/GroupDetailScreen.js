import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, Modal } from "react-native";

import bgColor from "../config/bgColor";
import Screen from "../components/Screen";
import useApi from "../hooks/useApi";
import groupsApi from "../api/groups";

import ModText from "../components/ModText";
import ListSeparator from "../components/ListSeparator";
import AddMembersScreen from "./AddMembersScreen";
import AddTasksScreen from "./AddTasksScreen";
import CreatePostScreen from "./CreatePostScreen";
import TouchableText from "../components/TouchableText";

export default function GroupDetailScreen({ route, navigation }) {
  const groupInfo = route.params;
  const [memberModal, setMemberModal] = useState(false);
  const [taskModal, setTaskModal] = useState(false);
  const [postModal, setPostModal] = useState(false);

  const { data: members, request: loadMembers } = useApi(groupsApi.getMembers);
  const { data: tasks, request: loadTasks } = useApi(groupsApi.getTasks);

  useEffect(() => {
    loadMembers(groupInfo.id);
    loadTasks(groupInfo.id);
  }, []);

  return (
    <Screen style={styles.container}>
      <View style={styles.memberArea}>
        <Text style={styles.heading}>Members:</Text>

        <FlatList
          data={members}
          keyExtractor={(item) => item.member_id.toString()}
          renderItem={({ item }) => <Text>{item.member_name}</Text>}
          ItemSeparatorComponent={ListSeparator}
        />

        <View style={styles.btn}>
          <TouchableText onPress={() => setPostModal(true)}>
            Create a post
          </TouchableText>
          <TouchableText onPress={() => setMemberModal(true)}>
            Add Members
          </TouchableText>
        </View>
      </View>

      <View style={styles.taskArea}>
        <Text style={styles.heading}>Tasks:</Text>

        <FlatList
          style={{ paddingHorizontal: 20 }}
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Text>{item.task}</Text>}
          ItemSeparatorComponent={ListSeparator}
        />

        {tasks.EmptyTaskList == "No task in group yet" && (
          <ModText>Your group doesn't have any task yet</ModText>
        )}

        <View style={styles.btn}>
          <TouchableText onPress={() => setTaskModal(true)}>
            Add Tasks
          </TouchableText>
        </View>
      </View>
      <Modal
        visible={postModal}
        animationType="slide"
        onRequestClose={() => {
          setPostModal(false);
        }}
      >
        <CreatePostScreen />
      </Modal>
      <Modal
        visible={memberModal}
        animationType="fade"
        onRequestClose={() => {
          setMemberModal(false);
        }}
        transparent
      >
        <AddMembersScreen />
      </Modal>
      <Modal
        visible={taskModal}
        animationType="fade"
        onRequestClose={() => {
          setTaskModal(false);
        }}
        transparent
      >
        <AddTasksScreen />
      </Modal>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgColor.screen,
    padding: 15,
  },
  body: {
    flex: 1,
  },
  text: {
    marginLeft: 20,
  },
  memberArea: {
    marginTop: 50,
    marginBottom: 10,
  },
  taskArea: {
    marginBottom: 20,
  },
  btn: {
    alignSelf: "flex-end",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
