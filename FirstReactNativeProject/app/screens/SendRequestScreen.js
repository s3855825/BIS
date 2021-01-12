import React, { useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import * as Yup from "yup";

import requestsApi from "../api/requests";
import AuthContext from "../auth/context";
import ModFormField from "../components/ModFormField";
import ModForm from "../components/ModForm";
import SubmitButton from "../components/SubmitButton";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).max(500).label("Title"),
  message: Yup.string().required().min(10).max(10000).label("Message"),
});

function SendRequestScreen({ route }) {
  const { user } = useContext(AuthContext);
  const postInfo = route.params;

  const handleSubmit = async ({ title, message }) => {
    const result = await requestsApi.sendRequest(
      title,
      message,
      user.id,
      postInfo.author_id,
      postInfo.id
    );

    console.log(title, message, user.id, postInfo.author_id, postInfo.id);
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

export default SendRequestScreen;
