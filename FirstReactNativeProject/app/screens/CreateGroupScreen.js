import React, { useState, useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import ModTextInput from "../components/ModTextInput";
import ModButton from "../components/ModButton";
import groupsApi from "../api/groups";
import AuthContext from "../auth/context";

const validationSchema = Yup.object().shape({
  groupName: Yup.string().required().min(1).max(500).label("groupName"),
});

function CreatePostScreen() {
  const { user } = useContext(AuthContext);

  const handleSubmit = async ({ groupName }) => {
    const result = await groupsApi.addGroup(groupName);
    if (!result.ok) {
      console.log(result.problem);
      alert("Error. Could not send the request.");
      return;
    }
    console.log(result.data);
    alert("Success");
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ groupName: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <ModTextInput
              placeholder="Group Name"
              onChangeText={handleChange("groupName")}
              style={{ width: "90%", margin: 10 }}
            />
            <Text style={{ color: "red" }}>{errors.groupName}</Text>
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
