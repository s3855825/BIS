import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, Modal } from "react-native";

import bgColor from "../config/bgColor";
import useApi from "../hooks/useApi";
import groupsApi from "../api/groups";

import ModText from "../components/ModText";
import ListSeparator from "../components/ListSeparator";
import AddTasksScreen from "./AddTasksScreen";
import TouchableIcon from "../components/TouchableIcon";
import ActivityIndicator from "../components/ActivityIndicator";

export default function GroupDetailScreen({ route }) {
  const groupInfo = route.params;
  const [taskModal, setTaskModal] = useState(false);

  const { data, loading, request } = useApi(groupsApi.getTasks);

  useEffect(() => {
    request(groupInfo.id);
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator visible={loading} />

      <View style={styles.taskArea}>
        <View style={styles.heading}>
          <Text style={styles.headingText}>Tasks:</Text>
          <View style={{ flex: 1 }} />
          <TouchableIcon
            onPress={() => setTaskModal(true)}
            matIcon="add-circle-outline"
            size={30}
            style={{ marginRight: 10 }}
          />
        </View>

        <FlatList
          style={{ paddingHorizontal: 20 }}
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Text>{item.task}</Text>}
          ItemSeparatorComponent={ListSeparator}
        />

        {data.EmptyTaskList == "No task in group yet" && (
          <ModText>Your group doesn't have any task yet</ModText>
        )}
      </View>
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
    </View>
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
  taskArea: {
    marginBottom: 20,
  },
  btn: {
    alignSelf: "flex-end",
  },
  headingText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  heading: {
    flexDirection: "row",
  },
});
