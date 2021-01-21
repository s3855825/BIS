import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Modal,
  TouchableOpacity,
} from "react-native";
import * as Yup from "yup";

import bgColor from "../config/bgColor";
import useApi from "../hooks/useApi";
import groupsApi from "../api/groups";
import modal from "../styles/modal";

import ListSeparator from "../components/ListSeparator";
import AddMembersScreen from "./AddMembersScreen";
import CreatePostScreen from "./CreatePostScreen";
import TouchableText from "../components/TouchableText";
import TouchableIcon from "../components/TouchableIcon";
import ActivityIndicator from "../components/ActivityIndicator";
import Screen from "../components/Screen";
import ModFormField from "../components/ModFormField";
import ModForm from "../components/ModForm";
import SubmitButton from "../components/SubmitButton";
import ErrorMessage from "../components/ErrorMessage";

import routes from "../navigation/routes";

const validationSchema = Yup.object().shape({
  friendcode: Yup.number().required().label("Friendcode"),
});

export default function GroupInfoScreen({ route, navigation }) {
  const groupInfo = route.params;
  const [memberModal, setMemberModal] = useState(false);
  const [error, setError] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [reload, setReload] = useState(false);

  const { data, loading, request } = useApi(groupsApi.getMembers);

  useEffect(() => {
    request(groupInfo.id);
  }, [reload]);

  const handleSubmit = async ({ friendcode }) => {
    const result = await groupsApi.addMember(groupInfo.id, friendcode);

    if (!result.ok) {
      setError(true);
    }

    setError(false);
    setMemberModal(false);
    setReload(!reload);
  };

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
          onPress={() => navigation.navigate(routes.CREATE_POSTS, groupInfo)}
          matComIcon="newspaper-plus"
          size={25}
          style={{ marginRight: 10 }}
        />
      </View>
      <View style={styles.body}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.member_id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(routes.CREATE_REVIEWS, item)}
            >
              <Text style={{ fontSize: 18 }}>{item.member_name}</Text>
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={ListSeparator}
          refreshing={refreshing}
          onRefresh={() => request(groupInfo.id)}
        />
      </View>

      <Modal
        visible={memberModal}
        animationType="fade"
        onRequestClose={() => {
          setMemberModal(false);
        }}
        transparent
      >
        <Screen style={modal.container}>
          <View style={modal.modalView}>
            <ErrorMessage error="Failed to add member" visible={error} />
            <ModForm
              initialValues={{ friendcode: "" }}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              {}
              <ModFormField
                placeholder="Friendcode"
                name="friendcode"
                keyboardType="numeric"
                style={modal.bar}
              />
              <SubmitButton style={modal.bar} title="Confirm" />
            </ModForm>
          </View>
        </Screen>
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
    paddingTop: 15,
    paddingHorizontal: 20,
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
