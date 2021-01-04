import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import ModTextInput from "../components/ModTextInput";
import ModButton from "../components/ModButton";
import postsApi from "../api/posts";
import AuthContext from "../auth/context";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).max(500).label("Title"),
  message: Yup.string().required().min(10).max(10000).label("Message"),
});

function CreatePostScreen() {
  const { user } = useContext(AuthContext);

  const handleSubmit = async ({ title, message }) => {
    const result = await postsApi.addPost(title, message, user.id);
    if (!result.ok) {
      console.log(result.data + result.problem + result.errors);
      alert("Error. Could not send the request.");
      return;
    }
    alert("Success");
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ title: "", message: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <ModTextInput
              placeholder="title"
              onChangeText={handleChange("title")}
              style={{ width: "90%", margin: 10 }}
            />
            <Text style={{ color: "red" }}>{errors.title}</Text>
            <ModTextInput
              placeholder="message"
              onChangeText={handleChange("message")}
              style={{ width: "90%", margin: 10, height: 200 }}
              multiline={true}
            />
            <Text style={{ color: "red" }}>{errors.message}</Text>
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
