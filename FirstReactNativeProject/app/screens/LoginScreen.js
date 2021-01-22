import React, { useState, useContext } from "react";
import { Alert, StyleSheet, Text, Image } from "react-native";
import * as Yup from "yup";

import ModButton from "../components/ModButton";
import authApi from "../api/auth";
import ErrorMessage from "../components/ErrorMessage";
import Screen from "../components/Screen";
import AuthContext from "../auth/context";
import ModForm from "../components/ModForm";
import SubmitButton from "../components/SubmitButton";
import ModFormField from "../components/ModFormField";
import authStorage from "../auth/storage";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  password: Yup.string().required().min(8).label("Password"),
});

function LoginScreen({ navigation }) {
  const { setUser } = useContext(AuthContext);
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ username, password }) => {
    const response = await authApi.login(username, password);

    if (!response.ok) {
      console.log(response.error);
      setLoginFailed(true);
      return;
    }
    setLoginFailed(false);
    const { email, friendcode, id } = response.data;
    const token = response.data.token.split(": ")[1];

    // setUser({ username, email, id, token, friendcode });
    authStorage.storeUser(
      JSON.stringify({ username, email, id, token, friendcode })
    );
    setUser({ username, email, id, token, friendcode });
  };

  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logos/logo.png")} />
      <ModForm
        initialValues={{ username: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Invalid username or password"
          visible={loginFailed}
        />
        <ModFormField
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="username"
          name="username"
          antIcon="user"
          style={styles.bar}
        />
        <ModFormField
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="password"
          textContentType="password"
          secureTextEntry
          name="password"
          matIcon="lock"
          style={styles.bar}
        />
        <SubmitButton style={styles.bar} title="Confirm" />
        <ModButton
          style={styles.bar}
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />
      </ModForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  bar: {
    width: "90%",
    margin: 10,
  },
});

export default LoginScreen;
