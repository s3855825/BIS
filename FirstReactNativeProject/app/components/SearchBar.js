import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { useFormikContext } from "formik";
import { MaterialIcons } from "@expo/vector-icons";

import ModTextInput from "./ModTextInput";
import ErrorMessage from "./ErrorMessage";

function SearchBar({ name, ...otherProps }) {
  const {
    handleChange,
    errors,
    setFieldTouched,
    touched,
    handleSubmit,
  } = useFormikContext();

  return (
    <>
      <View style={styles.container}>
        <ModTextInput
          onBlur={() => setFieldTouched(name)}
          onChangeText={handleChange(name)}
          {...otherProps}
        />
        <TouchableOpacity onPress={handleSubmit} style={styles.okBtn}>
          <MaterialIcons name="search" size={30} />
        </TouchableOpacity>
      </View>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
  },
  okBtn: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
  },
});

export default SearchBar;
