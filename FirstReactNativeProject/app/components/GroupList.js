import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import GroupCard from "./GroupCard";

function GroupList({ groupData }) {
  const navigation = useNavigation();

  return (
    <FlatList
      data={groupData}
      ItemSeparatorComponent={() => {
        return <View style={styles.separator} />;
      }}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <GroupCard
          data={item}
          onPress={() => navigation.navigate("GroupDetails", item)}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#FFFFFF",
  },
  separator: {
    height: 1,
    backgroundColor: "#000000",
  },
});

export default GroupList;
