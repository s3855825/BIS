import React, { useContext, useState } from "react";
import { Alert, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import * as Yup from "yup";

import groupsApi from "../api/groups";
import TeaContext from "../auth/context";
import modal from "../styles/modal";

import ModFormField from "../components/ModFormField";
import ModForm from "../components/ModForm";
import SubmitButton from "../components/SubmitButton";
import Screen from "../components/Screen";
import ErrorMessage from "../components/ErrorMessage";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
  task_name: Yup.string().required().min(1).max(500).label("Name"),
  task_description: Yup.string()
    .required()
    .min(10)
    .max(10000)
    .label("Desscription"),
});

function AddTasksScreen() {
  const { user } = useContext(TeaContext);
  const route = useRoute();
  const groupInfo = route.params;
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async ({ task_name, task_description }) => {
    const result = await groupsApi.addTask(
      task_name,
      task_description,
      groupInfo.id,
      user.id
    );

    if (!result.ok) {
      setError(true);
    }

    console.log(task_name, task_description, groupInfo.id, user.id);
    console.log(result.data);
    setError(!result.ok);
    setSuccess(result.ok);
    // setTaskModal(false);
  };

  return (
    <Screen style={modal.container}>
      <View style={modal.modalView}>
        <ModForm
          initialValues={{ task_name: "", task_description: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error="Failed to add task" visible={error} />
          <ErrorMessage error="Task added" visible={success} />
          <ModFormField placeholder="Name" name="task_name" style={modal.bar} />
          <ModFormField
            placeholder="Description"
            name="task_description"
            style={modal.bar}
          />
          <SubmitButton style={modal.bar} title="Confirm" />
        </ModForm>
      </View>
    </Screen>
  );
}

export default AddTasksScreen;
