import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Modal,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import * as Yup from "yup";

import bgColor from "../config/bgColor";
import useApi from "../hooks/useApi";
import groupsApi from "../api/groups";
import modal from "../styles/modal";
import routes from "../navigation/routes";
import TeaContext from "../auth/context";

import ModText from "../components/ModText";
import ListSeparator from "../components/ListSeparator";
import AddTasksScreen from "./AddTasksScreen";
import TouchableIcon from "../components/TouchableIcon";
import ActivityIndicator from "../components/ActivityIndicator";
import ModFormField from "../components/ModFormField";
import ModForm from "../components/ModForm";
import SubmitButton from "../components/SubmitButton";
import Screen from "../components/Screen";
import ErrorMessage from "../components/ErrorMessage";

const validationSchema = Yup.object().shape({
  task_name: Yup.string().required().min(1).max(500).label("Name"),
  task_description: Yup.string()
    .required()
    .min(10)
    .max(10000)
    .label("Desscription"),
});

export default function GroupDetailScreen({ route, navigation }) {
  const { user } = useContext(TeaContext);
  const groupInfo = route.params;
  const [taskModal, setTaskModal] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [reload, setReload] = useState(false);

  const { data, loading, request } = useApi(groupsApi.getTasks);

  useEffect(() => {
    request(groupInfo.id);
  }, [reload]);

  const handleSubmit = async ({ task_name, task_description }) => {
    const result = await groupsApi.addTask(
      task_name,
      task_description,
      groupInfo.id,
      user.id
    );

    if (!result.ok) {
      setError(true);
    }

    setError(false);
    setSuccess(result.ok);
    setTaskModal(false);
    setReload(!reload);
  };

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

        <View style={styles.body}>
          {data.EmptyTaskList == "No task in group yet" && (
            <ModText>Your group doesn't have any task yet</ModText>
          )}
          <FlatList
            data={data}
            keyExtractor={(item) => item.task_id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(routes.TASK_DETAILS, { item, groupInfo })
                }
              >
                <Text style={{ fontSize: 18 }}>{item.task_name}</Text>
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={ListSeparator}
            refreshing={refreshing}
            onRefresh={() => request(groupInfo.id)}
          />
        </View>
      </View>

      <Modal
        visible={taskModal}
        animationType="fade"
        onRequestClose={() => {
          setTaskModal(false);
        }}
        transparent
      >
        <Screen style={modal.container}>
          <View style={modal.modalView}>
            <ModForm
              initialValues={{ task_name: "", task_description: "" }}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              <ErrorMessage error="Failed to add task" visible={error} />
              <ErrorMessage error="Task added" visible={success} />
              <ModFormField
                placeholder="Name"
                name="task_name"
                style={modal.bar}
              />
              <ModFormField
                placeholder="Description"
                name="task_description"
                style={modal.bar}
              />
              <SubmitButton style={modal.bar} title="Confirm" />
            </ModForm>
          </View>
        </Screen>
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
    paddingTop: 15,
    paddingHorizontal: 20,
  },
  text: {
    marginLeft: 20,
  },
  taskArea: {
    marginBottom: 20,
    flex: 1,
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
