import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Modal,
  TouchableOpacity,
} from "react-native";

import bgColor from "../config/bgColor";
import useApi from "../hooks/useApi";
import groupsApi from "../api/groups";

import ModText from "../components/ModText";
import ListSeparator from "../components/ListSeparator";
import AddTasksScreen from "./AddTasksScreen";
import TouchableIcon from "../components/TouchableIcon";
import ActivityIndicator from "../components/ActivityIndicator";
import routes from "../navigation/routes";
import TeaContext from "../auth/context";

export default function GroupDetailScreen({ route, navigation }) {
  const groupInfo = route.params;
  const [taskModal, setTaskModal] = useState(false);

  const { data, loading, request } = useApi(groupsApi.getTasks);

  useEffect(() => {
    console.log(groupInfo.id);
    request(groupInfo.id);
    console.log(data);
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
          keyExtractor={(item) => item.task_id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(routes.TASK_DETAILS, { item, groupInfo })
              }
            >
              <Text>{item.task_name}</Text>
            </TouchableOpacity>
          )}
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
        {/* <TeaContext.Provider value={{ setTaskModal }}> */}
        <AddTasksScreen />
        {/* </TeaContext.Provider> */}
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
