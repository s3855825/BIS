import React, { useContext, useState } from "react";
import { View } from "react-native";
import { useRoute } from "@react-navigation/native";
import * as Yup from "yup";

import AuthContext from "../auth/context";
import postsApi from "../api/posts";
import create from "../styles/create";

import ModForm from "../components/ModForm";
import ModFormField from "../components/ModFormField";
import SubmitButton from "../components/SubmitButton";
import ErrorMessage from "../components/ErrorMessage";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).max(100).label("Title"),
  message: Yup.string().required().min(10).max(255).label("Message"),
});

function CreatePostScreen({ route }) {
  const { user } = useContext(AuthContext);
  const groupInfo = route.params;
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async ({ title, message }) => {
    const result = await postsApi.addPost(
      title,
      message,
      groupInfo.id,
      user.id
    );

    setError(!result.ok);
    setSuccess(result.ok);
  };

  return (
    <View style={create.container}>
      <ModForm
        initialValues={{ title: "", message: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error="Failed to create post" visible={error} />
        <ErrorMessage error="Post created" visible={success} />
        <ModFormField placeholder="Title" name="title" style={create.bar} />
        <ModFormField
          placeholder="Message"
          name="message"
          style={[create.bar]}
          multiline={true}
        />
        <SubmitButton style={create.bar} title="Confirm" />
      </ModForm>
    </View>
  );
}

export default CreatePostScreen;
