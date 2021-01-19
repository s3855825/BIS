import React, { useEffect, useContext, useState } from "react";
import { View, Modal } from "react-native";

import AuthContext from "../auth/context";
import groupsApi from "../api/groups";
import useApi from "../hooks/useApi";
import barList from "../styles/barList";
import header from "../styles/header";

import GroupList from "../components/GroupList";
import CreateGroupScreen from "./CreateGroupScreen";
import TouchableIcon from "../components/TouchableIcon";
import ActivityIndicator from "../components/ActivityIndicator";
import ErrorMessage from "../components/ErrorMessage";
import TouchableText from "../components/TouchableText";

export default function App({ navigation }) {
  const { user } = useContext(AuthContext);
  const [modalOn, setModalOn] = useState(false);

  const { data, loading, error, request } = useApi(groupsApi.getUserGroups);

  const loadData = () => {
    request(user.id);
  };

  const loadRightBtn = () => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableIcon
          onPress={() => setModalOn(true)}
          style={header.rightBtn}
          size={40}
          matIcon="add"
        />
      ),
    });
  };

  useEffect(() => {
    loadRightBtn();
    loadData();
    console.log(data);
  }, []);

  return (
    <View style={barList.container}>
      <ActivityIndicator visible={loading} />

      {error && (
        <View style={barList.loadErrorArea}>
          <ErrorMessage error="Could not load groups" visible={error} />
          <TouchableText onPress={loadData}>Retry</TouchableText>
        </View>
      )}

      <GroupList groupData={data} onRefresh={loadData} />

      <Modal
        visible={modalOn}
        animationType="fade"
        onRequestClose={() => setModalOn(false)}
        transparent
      >
        <CreateGroupScreen />
      </Modal>
    </View>
  );
}
