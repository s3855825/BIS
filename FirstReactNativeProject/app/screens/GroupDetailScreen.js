import React, { useEffect } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

import colors from "../config/colors";
import Screen from "../components/Screen";
import useApi from "../hooks/useApi";
import groupsApi from "../api/groups";
import ModText from "../components/ModText";
import ModForm from "../components/ModForm";
import ListSeparator from "../components/ListSeparator";
import SearchBar from "../components/SearchBar";

export default function GroupDetailScreen({ route, navigation }) {
  const groupInfo = route.params;
  const { data: members, request: loadMembers } = useApi(groupsApi.getMembers);
  const { data: tasks, request: loadTasks } = useApi(groupsApi.getTasks);

  useEffect(() => {
    loadMembers(groupInfo.id);
    loadTasks(groupInfo.id);
  }, []);

  const handleSubmit = async ({ user_id }) => {
    const result = await groupsApi.addMember(groupInfo.id, user_id);
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

        <FlatList
          data={members}
          keyExtractor={(item) => item.member_id.toString()}
          renderItem={({ item }) => <Text>{item.member_name}</Text>}
          ItemSeparatorComponent={ListSeparator}
        />

        <View style={styles.searchField}>
          <ModForm initialValues={{ user_id: "" }} onSubmit={handleSubmit}>
            <SearchBar
              placeholder="add members"
              placeholderTextColor={"black"}
              name="user_id"
            />
          </ModForm>
        </View>
      </View>

      <View style={styles.taskArea}>
        <Text>Tasks:</Text>

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

        <View style={styles.searchField}>
          <ModForm initialValues={{ user_id: "" }} onSubmit={handleSubmit}>
            <SearchBar
              placeholder="add members"
              placeholderTextColor={"black"}
              name="user_id"
            />
          </ModForm>
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
  okBtn: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
  },
});
