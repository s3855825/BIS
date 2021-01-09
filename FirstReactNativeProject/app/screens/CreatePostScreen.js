import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import * as Yup from "yup";

import postsApi from "../api/posts";
import AuthContext from "../auth/context";
import ModFormField from "../components/ModFormField";
import ModForm from "../components/ModForm";
import SubmitButton from "../components/SubmitButton";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).max(500).label("Title"),
  message: Yup.string().required().min(10).max(10000).label("Message"),
});

function CreatePostScreen() {
  const { user } = useContext(AuthContext);

  const handleSubmit = async ({ title, message, group_id }) => {
    const result = await postsApi.addPost(title, message, group_id, user.id);
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
        initialValues={{ title: "", message: "", group_id: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ModFormField
          placeholder="title"
          name="title"
          style={{ width: "90%", margin: 10 }}
        />
        <ModFormField
          placeholder="message"
          name="message"
          style={{ width: "90%", margin: 10, height: 200 }}
          multiline={true}
        />
        <ModFormField
          placeholder="group_id"
          name="group_id"
          style={{ width: "90%", margin: 10 }}
        />
        <SubmitButton style={{ width: "90%", margin: 10 }} title="Confirm" />
      </ModForm>
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
