import React from "react";
import { FlatList } from "react-native";

import TaskCard from "../components/TaskCard";
import ListSeparator from "./ListSeparator";

const tasks = [
  {
    id: 1,
    task: "eat",
  },
  {
    id: 2,
    task: "drink",
  },
];
function Tasks({ listData }) {
  return (
    <FlatList
      style={{ paddingHorizontal: 20 }}
      data={listData}
      keyExtractor={(listData) => listData.id.toString()}
      renderItem={({ item }) => <TaskCard task={item.task} />}
      ItemSeparatorComponent={ListSeparator}
    />
  );
}
export default Tasks;
