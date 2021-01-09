import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import ModTextInput from "../components/ModTextInput";
import ModButton from "../components/ModButton";
import groupsApi from "../api/groups";

const validationSchema = Yup.object().shape({
  task_name: Yup.string().required().min(1).max(500).label("Task Name"),
  task_description: Yup.string()
    .required()
    .min(10)
    .max(10000)
    .label("Task Description"),
});

function CreateTasksScreen({ groupId }) {
  const handleSubmit = async ({ task_name, task_description }) => {
    const result = await groupsApi.addTask(
      task_name,
      task_description,
      groupId
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
      <Formik
        initialValues={{ task_name: "", task_description: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <ModTextInput
              placeholder="task name"
              onChangeText={handleChange("task_name")}
              style={{ width: "90%", margin: 10 }}
            />
            <Text style={{ color: "red" }}>{errors.title}</Text>
            <ModTextInput
              placeholder="message"
              onChangeText={handleChange("task_description")}
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

export default CreateTasksScreen;
