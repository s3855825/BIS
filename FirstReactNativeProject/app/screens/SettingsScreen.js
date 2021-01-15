import React, { useContext } from "react";
import { Text, StyleSheet, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import ModButton from "../components/ModButton";
import AuthContext from "../auth/context";
import ScreenHeader from "../components/ScreenHeader";
import ModForm from "../components/ModForm";
import ModFormField from "../components/ModFormField";
import SubmitButton from "../components/SubmitButton";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  username: Yup.string().required().label("Username"),
  password: Yup.string().required().min(8).label("Password"),
});

function SettingsScreen({ navigation }) {
  const handleSubmit = () => {
    alert("TODO");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Change account information</Text>
      <ModForm
        initialValues={{ email: "", username: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Text>Edit email:</Text>
        <ModFormField
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="email"
          keyboardType="email-address"
          textContentType="emailAddress"
          name="email"
          style={styles.bar}
        />
        <Text>Edit username:</Text>
        <ModFormField
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="username"
          name="username"
          style={styles.bar}
        />
        <Text>Edit password:</Text>
        <ModFormField
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="password"
          textContentType="password"
          name="password"
          secureTextEntry
          style={styles.bar}
        />
        <SubmitButton style={styles.bar} title="Confirm" />
      </ModForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  bar: {
    width: "90%",
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
  },
});

export default SettingsScreen;
