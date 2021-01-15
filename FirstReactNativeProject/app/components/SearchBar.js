import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { useFormikContext } from "formik";
import { MaterialIcons } from "@expo/vector-icons";

import ModTextInput from "./ModTextInput";

function SearchBar({ name, onPress, ...otherProps }) {
  const { handleChange, handleSubmit } = useFormikContext();

  return (
    <View style={styles.container}>
      <ModTextInput onChangeText={handleChange(name)} {...otherProps} />
      <TouchableOpacity onPress={handleSubmit} style={styles.okBtn}>
        <MaterialIcons name="search" size={30} />
      </TouchableOpacity>
    </View>
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
