import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import ModTextInput from "../components/ModTextInput";
import ModButton from "../components/ModButton";
import usersApi from "../api/auth";
import ErrorMessage from "../components/ErrorMessage";
import authApi from "../api/auth";
import useApi from "../hooks/useApi";
import auth from "../api/auth";
import AuthContext from "../auth/context";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  username: Yup.string().required().label("Username"),
  password: Yup.string().required().min(8).label("Password"),
});

function RegisterScreen({ navigation }) {
  const { user, setUser } = useContext(AuthContext);

  const handleSubmit = async ({ email, username, password }) => {
    const result = await usersApi.register(email, username, password);
    const response = await authApi.login(username, password);

    if (!result.ok) {
      console.log("register " + result.problem + "\n\n" + result.data);
      return;
    }
    console.log(result.data);

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
      <Formik
        initialValues={{ email: "", username: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <ModTextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="email"
              keyboardType="email-address"
              textContentType="emailAddress"
              onChangeText={handleChange("email")}
              style={{ width: "90%", margin: 10 }}
            />
            <Text style={{ color: "red" }}>{errors.email}</Text>
            <ModTextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="username"
              onChangeText={handleChange("username")}
              style={{ width: "90%", margin: 10 }}
            />
            <Text style={{ color: "red" }}>{errors.username}</Text>
            <ModTextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="password"
              textContentType="password"
              secureTextEntry
              onChangeText={handleChange("password")}
              style={{ width: "90%", margin: 10 }}
            />
            <Text style={{ color: "red" }}>{errors.password}</Text>
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

export default RegisterScreen;
