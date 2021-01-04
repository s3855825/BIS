import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Formik } from "formik";

import colors from "../config/colors";
import Screen from "../components/Screen";
import Tasks from "../components/Tasks";
import Members from "../components/Members";
import AuthContext from "../auth/context";
import useApi from "../hooks/useApi";
import groupsApi from "../api/groups";
import ModTextInput from "../components/ModTextInput";
import ModText from "../components/ModText";

export default function GroupDetailScreen({ route, navigation }) {
  const groupInfo = route.params;
  const { data: members, request: loadMembers } = useApi(groupsApi.getMembers);
  const { data: tasks, request: loadTasks } = useApi(groupsApi.getTasks);

  useEffect(() => {
    console.log("The ID is " + groupInfo.id);
    loadMembers(groupInfo.id);
    loadTasks(groupInfo.id);
  }, []);

  const handleSubmit = async ({ user_id }) => {
    const result = await groupsApi.addMember(user_id, groupInfo.id);
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
          <Formik initialValues={{ user_id: "" }} onSubmit={handleSubmit}>
            {({ handleChange, handleSubmit }) => (
              <>
                <TextInput
                  placeholder="add members"
                  placeholderTextColor={"black"}
                  style={{ flex: 1, borderBottomWidth: 2, padding: 5 }}
                  onChangeText={handleChange("user_id")}
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
        {tasks.EmptyTaskList == "No task in group yet" && (
          <ModText>Your group doesn't have any task yet</ModText>
        )}
        <TouchableOpacity
          onPress={() => navigation.navigate("CreateTasks")}
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 10,
          }}
        >
          <Text>Create Tasks</Text>
        </TouchableOpacity>
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
