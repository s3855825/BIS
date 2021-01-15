import React, { useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import * as Yup from "yup";

import AuthContext from "../auth/context";
import groupsApi from "../api/groups";
import postsApi from "../api/posts";

import ModForm from "../components/ModForm";
import ModFormField from "../components/ModFormField";
import SubmitButton from "../components/SubmitButton";
import routes from "../navigation/routes";
import { useRoute } from "@react-navigation/native";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).max(100).label("Title"),
  message: Yup.string().required().min(10).max(255).label("Message"),
});

function CreatePostScreen({ navigation }) {
  const { user } = useContext(AuthContext);
  const route = useRoute();
  const groupInfo = route.params;

  const handleSubmit = async ({ title, message }) => {
    const result = await postsApi.addPost(
      title,
      message,
      groupInfo.id,
      user.id
    );
    if (!result.ok) {
      console.log(result.data + result.problem + result.errors);
      alert("Error. Could not send the request.");
      return;
    }
    alert("Success");
  };

  return (
    <View style={styles.container}>
      <ModForm
        initialValues={{ title: "", message: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ModFormField placeholder="Title" name="title" style={styles.bar} />
        <ModFormField
          placeholder="Message"
          name="message"
          style={[styles.bar]}
          multiline={true}
        />
        <SubmitButton style={styles.bar} title="Confirm" />
      </ModForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
  },
  bar: {
    width: "90%",
    margin: 10,
  },
});

export default CreatePostScreen;
