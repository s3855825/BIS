import React, { useEffect, useContext, useState } from "react";
import { View, Modal, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import AuthContext from "../auth/context";
import groupsApi from "../api/groups";
import useApi from "../hooks/useApi";
import barList from "../styles/barList";
import header from "../styles/header";

import GroupList from "../components/GroupList";
import CreateGroupScreen from "./CreateGroupScreen";
import ModButton from "../components/ModButton";

export default function App({ route, navigation }) {
  const { user } = useContext(AuthContext);
  const [modalOn, setModalOn] = useState(false);

  const { data: allData, request: loadForData } = useApi(
    groupsApi.getUserGroups
  );

  const loadData = () => {
    loadForData(user.id);
  };

  const loadRightBtn = () => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => setModalOn(true)}
          style={header.rightBtn}
        >
          <MaterialIcons name="add" size={40} />
        </TouchableOpacity>
      ),
    });
  };

  useEffect(() => {
    loadRightBtn();
    loadData();
  }, []);

  return (
    <View style={barList.container}>
      <View style={barList.body}>
        <View style={barList.groupArea}>
          <GroupList groupData={allData} onRefresh={loadData} />
        </View>
      </View>

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
