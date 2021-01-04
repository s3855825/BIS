import React from "react";
import { StyleSheet, FlatList } from "react-native";

import colors from "../config/colors";
import edge from "../config/edge";

import PostCard from "./PostCard";
import ListSeparator from "./ListSeparator";
import MemberCard from "./MemberCard";

const members = [
  {
    id: 1,
    name: "Vinh",
  },
  {
    id: 2,
    name: "Duc",
  },
];
function Member({ listData }) {
  return (
    <FlatList
      data={listData}
      keyExtractor={(members) => members.member_id.toString()}
      renderItem={({ item }) => <MemberCard name={item.member_name} />}
      ItemSeparatorComponent={ListSeparator}
    />
  );
}

const styles = StyleSheet.create({
  member: {
    width: "90%",
    height: 30,
    borderWidth: 2,
    alignItems: "center",
  },
});

export default Member;
