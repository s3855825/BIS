import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import GroupCard from "./GroupCard";

function GroupList({ groupData, onRefresh }) {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);

  return (
    <FlatList
      data={groupData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <GroupCard
          data={item}
          onPress={() => navigation.navigate("GroupDetails", item)}
        />
      )}
      ItemSeparatorComponent={() => {
        return <View style={styles.separator} />;
      }}
      refreshing={refreshing}
      onRefresh={onRefresh}
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
