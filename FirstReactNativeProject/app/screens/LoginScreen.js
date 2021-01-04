import React, { useState, useContext } from "react";
import { StyleSheet, Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import ModTextInput from "../components/ModTextInput";
import ModButton from "../components/ModButton";
import authApi from "../api/auth";
import ErrorMessage from "../components/ErrorMessage";
import Screen from "../components/Screen";
import AuthContext from "../auth/context";
import useApi from "../hooks/useApi";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen({ navigation }) {
  const { user, setUser } = useContext(AuthContext);
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ username, password }) => {
    const response = await authApi.login(username, password);

    if (!response.ok) {
      console.log(response.error);
      return setLoginFailed(true);
    }
    setLoginFailed(false);
    console.log(response.data);
    const { email } = response.data;

    const id = response.data.token.split(": ")[0];
    const token = response.data.token.split(": ")[1];

    setUser({ username, email, id, token });
  };

  return (
    <Screen style={styles.container}>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, handleChange, errors }) => (
          <>
            <ErrorMessage
              error="Invalid username or password"
              visible={loginFailed}
            />
            <ModTextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="username"
              onChangeText={handleChange("username")}
              style={styles.bar}
            />
            <ErrorMessage error={errors.username} />
            <ModTextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="password"
              textContentType="password"
              secureTextEntry
              onChangeText={handleChange("password")}
              style={styles.bar}
            />
            <ErrorMessage error={errors.password} />
            <ModButton
              style={styles.bar}
              title="Confirm"
              onPress={handleSubmit}
            />
            <ModButton
              style={styles.bar}
              title="Register"
              onPress={() => navigation.navigate("Register")}
            />
          </>
        )}
      </Formik>
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
