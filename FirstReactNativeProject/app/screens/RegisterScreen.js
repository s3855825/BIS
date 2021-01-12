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
    const registerResponse = await usersApi.register(email, username, password);

    if (!registerResponse.ok) {
      console.log(
        "register " + registerResponse.problem + "\n\n" + registerResponse.data
      );
      return;
    }
    console.log(registerResponse.data);

    // request to login to extract user info
    const loginResponse = await authApi.login(username, password);

    if (!loginResponse.ok) {
      console.log(
        "login " + loginResponse.problem + "\n\n" + loginResponse.data
      );
      return;
    }
    console.log(loginResponse.data);

    const { friendcode } = loginResponse.data;

    const id = loginResponse.data.token.split(": ")[0];
    const token = loginResponse.data.token.split(": ")[1];

    setUser({ username, email, id, token, friendcode });
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
