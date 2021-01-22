import React, { useContext, useState } from "react";
import { Alert, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Yup from "yup";

import groupsApi from "../api/groups";
import AuthContext from "../auth/context";
import modal from "../styles/modal";
import routes from "../navigation/routes";

import ModForm from "../components/ModForm";
import ModFormField from "../components/ModFormField";
import SubmitButton from "../components/SubmitButton";
import Screen from "../components/Screen";
import ErrorMessage from "../components/ErrorMessage";

const validationSchema = Yup.object().shape({
  group_name: Yup.string().required().min(1).max(500).label("Group Name"),
});

function CreateGroupScreen() {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);
  const [addGroupError, setAddGroupError] = useState(false);
  const [addMemberError, setAddMemberError] = useState(false);

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
      console.log(groupRes + "\n" + memberRes.data);
      return setAddMemberError(true);
    }

    navigation.navigate(routes.GROUP_DETAILS, groupRes.data);
  };

  return (
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
  );
}

export default CreateGroupScreen;
