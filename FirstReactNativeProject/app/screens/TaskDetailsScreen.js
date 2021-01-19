import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { StyleSheet, View, Text } from "react-native";

import groupsApi from "../api/groups";
import details from "../styles/details";

function TaskDetailsScreen({ route }) {
  const { item: taskInfo, groupInfo } = route.params;

  const { data, loading, error, request } = useApi(groupsApi.getGroupTasks);

  const loadTaskDetails = () => {
    request(groupInfo.id, taskInfo.task_id);
  };

  useEffect(() => {
    loadTaskDetails();
    console.log(data);
  }, []);

  return (
    <View style={details.container}>
      <Text style={details.titleText}>{data.task_name}</Text>
      <Text style={details.bodyText}>Author: {data.author}</Text>
      <Text style={details.bodyText}>Description: {data.task_description}</Text>
      <Text style={details.bodyText}>Created: {data.task_created}</Text>
      <Text style={details.bodyText}>Deadline: {data.deadline}</Text>

      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default TaskDetailsScreen;
