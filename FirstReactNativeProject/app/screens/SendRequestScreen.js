import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import * as Yup from "yup";

import requestsApi from "../api/requests";
import AuthContext from "../auth/context";
import ModFormField from "../components/ModFormField";
import ModForm from "../components/ModForm";
import SubmitButton from "../components/SubmitButton";
import ErrorMessage from "../components/ErrorMessage";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).max(500).label("Title"),
  message: Yup.string().required().min(10).max(10000).label("Message"),
});

function SendRequestScreen({ route }) {
  const { user } = useContext(AuthContext);
  const postInfo = route.params;
  const [success, setSuccess] = useState();
  const [error, setError] = useState(false);

  const handleSubmit = async ({ title, message }) => {
    const result = await requestsApi.sendRequest(
      title,
      message,
      user.id,
      postInfo.author,
      postInfo.id
    );

    if (!result.ok) {
      console.log(result.data);
      setError(true);
      setSuccess(false);
      return;
    }

    setError(false);
    setSuccess(true);
  };

  return (
    <View style={styles.container}>
      <ModForm
        initialValues={{ title: "", message: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error="Could not send request" visible={error} />
        <ErrorMessage error="Success!" visible={success} />
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
