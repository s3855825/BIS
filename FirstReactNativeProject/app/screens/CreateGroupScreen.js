import React, { useContext } from "react";
import { View } from "react-native";
import * as Yup from "yup";

import groupsApi from "../api/groups";
import AuthContext from "../auth/context";
import modal from "../styles/modal";

import ModForm from "../components/ModForm";
import ModFormField from "../components/ModFormField";
import SubmitButton from "../components/SubmitButton";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  group_name: Yup.string().required().min(1).max(500).label("Group Name"),
});

function CreateGroupScreen({ navigation }) {
  const { user } = useContext(AuthContext);

  const handleSubmit = async ({ group_name }) => {
    // request to add group
    const result = await groupsApi.addGroup(group_name);

    if (!result.ok) {
      console.log(result.problem);
      alert("group: Error. Could not send the request.");
      return;
    }

    // request to add current account into created group
    const response = await groupsApi.addMember(result.data.id, user.friendcode);

    if (!response.ok) {
      console.log(response.problem + response.error);
      alert("response: Error. Could not send the request.");
      return;
    }

    console.log(response.data);
    console.log(result.data);
    navigation.navigate("GroupDetails", result.data);
  };

  return (
    <Screen style={modal.container}>
      <View style={modal.modalView}>
        <ModForm
          initialValues={{ group_name: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
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
