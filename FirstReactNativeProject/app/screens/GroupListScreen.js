import React, { useEffect, useContext, useState } from "react";
import { View, Modal } from "react-native";
import * as Yup from "yup";

import AuthContext from "../auth/context";
import groupsApi from "../api/groups";
import useApi from "../hooks/useApi";
import barList from "../styles/barList";
import header from "../styles/header";
import modal from "../styles/modal";
import routes from "../navigation/routes";

import Screen from "../components/Screen";
import GroupList from "../components/GroupList";
import CreateGroupScreen from "./CreateGroupScreen";
import TouchableIcon from "../components/TouchableIcon";
import ActivityIndicator from "../components/ActivityIndicator";
import ErrorMessage from "../components/ErrorMessage";
import TouchableText from "../components/TouchableText";
import ModForm from "../components/ModForm";
import ModFormField from "../components/ModFormField";
import SubmitButton from "../components/SubmitButton";

const validationSchema = Yup.object().shape({
  group_name: Yup.string().required().min(1).max(500).label("Group Name"),
});

export default function App({ navigation }) {
  const { user } = useContext(AuthContext);
  const [modalOn, setModalOn] = useState(false);
  const [addGroupError, setAddGroupError] = useState(false);
  const [addMemberError, setAddMemberError] = useState(false);
  const [reload, setReload] = useState(false);
  const [haveGroup, setHaveGroup] = useState(false);

  const { data, loading, error, request } = useApi(groupsApi.getUserGroups);

  const handleSubmit = async ({ group_name }) => {
    // request to add group
    const groupRes = await groupsApi.addGroup(group_name);

    if (!groupRes.ok) {
      console.log(groupRes.data);
      return setAddGroupError(true);
    }

    // request to add current account into created group
    const memberRes = await groupsApi.addMember(
      groupRes.data.id,
      user.friendcode
    );

    if (!memberRes.ok) {
      return setAddMemberError(true);
    }

    setModalOn(false);
    setReload(!reload);
    navigation.navigate(routes.GROUP_DETAILS, groupRes.data);
  };

  useEffect(() => {
    loadRightBtn();
  }, []);

  useEffect(() => {
    loadData();
  }, [reload]);

  const loadData = () => {
    request(user.id);

    if (error) {
      setHaveGroup(true);
      return;
    }

    if (!Array.isArray(data)) {
      setHaveGroup(false);
    } else {
      setHaveGroup(true);
    }
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

  return (
    <View style={barList.container}>
      <ActivityIndicator visible={loading} />

      {error && (
        <View style={barList.loadErrorArea}>
          <ErrorMessage error="Could not load groups" visible={error} />
        </View>
      )}

      {!Array.isArray(data) && (
        <View style={barList.loadErrorArea}>
          <ErrorMessage
            error="You don't have any group yet"
            visible={!Array.isArray(data)}
          />
        </View>
      )}

      <GroupList groupData={data} onRefresh={loadData} />

      <Modal
        visible={modalOn}
        animationType="fade"
        onRequestClose={() => setModalOn(false)}
        transparent
      >
        <Screen style={modal.container}>
          <View style={modal.modalView}>
            <ModForm
              initialValues={{ group_name: "" }}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              <ErrorMessage
                error="Failed to create group"
                visible={addGroupError}
              />
              <ErrorMessage
                error="Failed to assign yourself into group"
                visible={addMemberError}
              />
              <ModFormField
                placeholder="Group Name"
                name="group_name"
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
