import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Formik } from "formik";

import colors from "../config/colors";
import Screen from "../components/Screen";
import Tasks from "../components/Tasks";
import Members from "../components/Members";
import AuthContext from "../auth/context";
import useApi from "../hooks/useApi";
import groupsApi from "../api/groups";
import ModTextInput from "../components/ModTextInput";

export default function GroupDetailScreen({ route }) {
  const groupInfo = route.params;
  const groupId = groupInfo.id;
  const { data: members, request: loadMembers } = useApi(groupsApi.getMembers);
  const { data: tasks, request: loadTasks } = useApi(groupsApi.getTasks);

  useEffect(() => {
    console.log("The ID is " + groupInfo.id);
    loadMembers(groupId);
    loadTasks(groupId);
  }, []);

  const handleSubmit = async ({ member_id }) => {
    const result = await groupsApi.addGroupMember(member_id, groupInfo.id);
    if (!result.ok) {
      console.log(result.problem);
      return;
    }
    console.log(result.data);
  };

  const handleSubmitTask = async ({ task_name }) => {
    const result = await groupsApi.addGroupTask(task_name, groupInfo.id);
    if (!result.ok) {
      console.log(result.problem);
      return;
    }
    console.log(result.data);
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.memberArea}>
        <Text>Members:</Text>
        <Members listData={members} />
        <View style={styles.searchField}>
          <Formik initialValues={{ member_id: "" }} onSubmit={handleSubmit}>
            {({ handleChange, handleSubmit }) => (
              <>
                <ModTextInput
                  placeholder="add members"
                  placeholderTextColor={"black"}
                  style={{ flex: 1 }}
                  onChangeText={handleChange("member_id")}
                />
                <TouchableOpacity
                  onPress={handleSubmit}
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: 10,
                  }}
                >
                  <Text>OK</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </View>
      </View>
      <View style={styles.taskArea}>
        <Text>Tasks:</Text>
        <Tasks listData={tasks} />
        <View style={styles.searchField}>
          <Formik initialValues={{ task_name: "" }} onSubmit={handleSubmitTask}>
            {({ handleChange, handleSubmit }) => (
              <>
                <ModTextInput
                  placeholder="add tasks"
                  placeholderTextColor={"black"}
                  style={{ flex: 1 }}
                  onChangeText={handleChange("task_name")}
                />
                <TouchableOpacity
                  onPress={handleSubmit}
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: 10,
                  }}
                >
                  <Text>OK</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.screen,
    padding: 10,
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
  searchField: {
    flexDirection: "row",
  },
});
