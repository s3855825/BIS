import React, { useContext } from "react";
import { View } from "react-native";
import { useRoute } from "@react-navigation/native";
import * as Yup from "yup";

import groupsApi from "../api/groups";
import AuthContext from "../auth/context";
import modal from "../styles/modal";

import ModFormField from "../components/ModFormField";
import ModForm from "../components/ModForm";
import SubmitButton from "../components/SubmitButton";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  task_name: Yup.string().required().min(1).max(500).label("Name"),
  task_description: Yup.string()
    .required()
    .min(10)
    .max(10000)
    .label("Desscription"),
});

function AddTasksScreen() {
  const { user } = useContext(AuthContext);
  const route = useRoute();
  const { id } = route.params;

  const handleSubmit = async ({ task_name, task_description }) => {
    console.log(task_name, task_description, id, user.id);
    const result = await groupsApi.addTask(
      task_name,
      task_description,
      id,
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
    <Screen style={modal.container}>
      <View style={modal.modalView}>
        <ModForm
          initialValues={{ task_name: "", task_description: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
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
