import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, Modal } from "react-native";

import bgColor from "../config/bgColor";
import useApi from "../hooks/useApi";
import groupsApi from "../api/groups";

import ListSeparator from "../components/ListSeparator";
import AddMembersScreen from "./AddMembersScreen";
import CreatePostScreen from "./CreatePostScreen";
import TouchableText from "../components/TouchableText";
import TouchableIcon from "../components/TouchableIcon";
import ActivityIndicator from "../components/ActivityIndicator";

export default function GroupInfoScreen({ route, navigation }) {
  const groupInfo = route.params;
  const [memberModal, setMemberModal] = useState(false);
  const [postModal, setPostModal] = useState(false);

  const { data, loading, request } = useApi(groupsApi.getMembers);

  useEffect(() => {
    request(groupInfo.id);
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator visible={loading} />

      <View style={styles.heading}>
        <Text style={styles.headingText}>Members</Text>
        <View style={{ flex: 1 }} />
        <TouchableIcon
          onPress={() => setMemberModal(true)}
          antIcon="adduser"
          size={25}
          style={{ marginRight: 10 }}
        />
        <TouchableIcon
          onPress={() => setPostModal(true)}
          matComIcon="newspaper-plus"
          size={25}
          style={{ marginRight: 10 }}
        />
      </View>
      <View style={styles.body}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.member_id.toString()}
          renderItem={({ item }) => <Text>{item.member_name}</Text>}
          ItemSeparatorComponent={ListSeparator}
        />
      </View>

      <Modal
        visible={postModal}
        animationType="slide"
        onRequestClose={() => {
          setPostModal(false);
        }}
      >
        <CreatePostScreen />
      </Modal>

      <Modal
        visible={memberModal}
        animationType="fade"
        onRequestClose={() => {
          setMemberModal(false);
        }}
        transparent
      >
        <AddMembersScreen />
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
    paddingTop: 10,
  },
  text: {
    marginLeft: 20,
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
