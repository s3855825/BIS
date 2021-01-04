import React, { useState, useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import ModTextInput from "../components/ModTextInput";
import ModButton from "../components/ModButton";
import groupsApi from "../api/groups";
import AuthContext from "../auth/context";

const validationSchema = Yup.object().shape({
  group_name: Yup.string().required().min(1).max(500).label("Group Name"),
});

function CreatePostScreen() {
  const { user } = useContext(AuthContext);
  const user_id = user.id;

  const handleSubmit = async ({ group_name }) => {
    console.log(group_name, user.id);
    const result = await groupsApi.addGroup(group_name);

    if (!result.ok) {
      console.log(result.problem);
      alert("group: Error. Could not send the request.");
      return;
    }

    const groupId = result.data.id;

    const response = await groupsApi.addMember(groupId, user_id);

    if (!response.ok) {
      console.log(response.problem + response.error);
      alert("response: Error. Could not send the request.");
      return;
    }
    console.log(response.data);
    console.log(result.data);
    alert("Success");
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ group_name: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <ModTextInput
              placeholder="Group Name"
              onChangeText={handleChange("group_name")}
              style={{ width: "90%", margin: 10 }}
            />
            <Text style={{ color: "red" }}>{errors.group_name}</Text>
            <ModButton
              style={{ width: "90%", margin: 10 }}
              title="Confirm"
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CreatePostScreen;
