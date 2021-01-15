import { useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

function TaskDetailsScreen() {
  const route = useRoute();
  const {} = route.params;

  return (
    <View>
      <Text></Text>
      <Text></Text>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default TaskDetailsScreen;
