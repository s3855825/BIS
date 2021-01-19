import React, { useState } from "react";
import { Alert, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import * as Yup from "yup";

import groupsApi from "../api/groups";
import modal from "../styles/modal";

import ModFormField from "../components/ModFormField";
import ModForm from "../components/ModForm";
import SubmitButton from "../components/SubmitButton";
import Screen from "../components/Screen";
import ErrorMessage from "../components/ErrorMessage";

const validationSchema = Yup.object().shape({
  friendcode: Yup.number().required().label("Friendcode"),
});

function AddMembersScreen({ onMemberSuccess }) {
  const route = useRoute();
  const { id } = route.params;
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const passedIn = () => {
    console.log("helo");
  };

  const handleSubmit = async ({ friendcode }) => {
    const result = await groupsApi.addMember(id, friendcode);

    if (result.ok) passedIn();
    // console.log(result.data);
    setError(!result.ok);
    setSuccess(result.ok);
  };

  return (
    <Screen style={modal.container}>
      <View style={modal.modalView}>
        <ErrorMessage error="Failed to add member" visible={error} />
        <ErrorMessage error="Member added" visible={success} />
        <ModForm
          initialValues={{ friendcode: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {}
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
