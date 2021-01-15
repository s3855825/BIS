import React from "react";
import { Alert, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import * as Yup from "yup";

import groupsApi from "../api/groups";
import modal from "../styles/modal";

import ModFormField from "../components/ModFormField";
import ModForm from "../components/ModForm";
import SubmitButton from "../components/SubmitButton";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  friendcode: Yup.string().required().min(10).max(10).label("Friendcode"),
});

function AddMembersScreen() {
  const route = useRoute();
  const { id } = route.params;

  const handleSubmit = async ({ friendcode }) => {
    const result = await groupsApi.addMember(id, friendcode);

    if (!result.ok) {
      console.log(result.data + result.problem + result.errors);
      Alert.alert("Error!", "Could not add member.");
      return;
    }

    Alert.alert("Success!", "Member added");
  };

  return (
    <Screen style={modal.container}>
      <View style={modal.modalView}>
        <ModForm
          initialValues={{ friendcode: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ModFormField
            placeholder="Friendcode"
            name="friendcode"
            style={modal.bar}
          />
          <SubmitButton style={modal.bar} title="Confirm" />
        </ModForm>
      </View>
    </Screen>
  );
}

export default AddMembersScreen;
