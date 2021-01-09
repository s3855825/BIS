import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import * as Yup from "yup";

import usersApi from "../api/auth";
import authApi from "../api/auth";
import AuthContext from "../auth/context";
import ModFormField from "../components/ModFormField";
import SubmitButton from "../components/SubmitButton";
import ModForm from "../components/ModForm";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  username: Yup.string().required().label("Username"),
  password: Yup.string().required().min(8).label("Password"),
});

function RegisterScreen() {
  const { setUser } = useContext(AuthContext);

  const handleSubmit = async ({ email, username, password }) => {
    // request to register a new account
    const result = await usersApi.register(email, username, password);

    if (!result.ok) {
      console.log("register " + result.problem + "\n\n" + result.data);
      return;
    }
    console.log(result.data);

    // request to login to extract user info
    const response = await authApi.login(username, password);

    if (!response.ok) {
      console.log("login " + result.problem + "\n\n" + result.data);
      return;
    }
    console.log(response.data);

    const id = response.data.token.split(": ")[0];
    const token = response.data.token.split(": ")[1];

    setUser({ username, email, id, token });
  };

  return (
    <View style={styles.container}>
      <ModForm
        initialValues={{ email: "", username: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ModFormField
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="email"
          keyboardType="email-address"
          textContentType="emailAddress"
          name="email"
          style={styles.bar}
        />
        <ModFormField
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="username"
          name="username"
          style={styles.bar}
        />
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
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  bar: {
    width: "90%",
    margin: 10,
  },
});

export default RegisterScreen;
