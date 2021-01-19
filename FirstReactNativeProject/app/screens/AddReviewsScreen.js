import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Alert, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import * as Yup from "yup";

import AuthContext from "../auth/context";
import reviewsApi from "../api/reviews";

import ModForm from "../components/ModForm";
import ModFormField from "../components/ModFormField";
import SubmitButton from "../components/SubmitButton";
import ErrorMessage from "../components/ErrorMessage";

const validationSchema = Yup.object().shape({
  score: Yup.number().label("Title"),
  message: Yup.string().required().min(10).max(255).label("Message"),
});

function AddReviewsScreen() {
  const { user } = useContext(AuthContext);
  const route = useRoute();
  const members = route.params;
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async ({ score, message }) => {
    const result = await reviewsApi.addReviews(
      score,
      message,
      user.id,
      members.member_id
    );

    console.log(result.data);
    setError(!result.ok);
    setSuccess(result.ok);
  };

  return (
    <View style={styles.container}>
      <ModForm
        initialValues={{ score: "", message: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error="Failed to send review" visible={error} />
        <ErrorMessage error="Success!" visible={success} />
        <Text>Add some reviews for member: {members.member_name}</Text>
        <ModFormField placeholder="score" name="Score" style={styles.bar} />
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

export default AddReviewsScreen;
