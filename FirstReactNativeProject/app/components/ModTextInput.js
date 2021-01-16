import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";

import border from "../config/border";

function ModTextInput({ matIcon, matComIcon, antIcon, style, ...otherProps }) {
  return (
    <View style={[styles.container, style]}>
      {matIcon && (
        <MaterialIcons
          name={matIcon}
          size={20}
          color="grey"
          style={styles.icon}
        />
      )}
      {matComIcon && (
        <MaterialCommunityIcons
          name={matComIcon}
          size={20}
          color="grey"
          style={styles.icon}
        />
      )}
      {antIcon && (
        <AntDesign name={antIcon} size={20} color="grey" style={styles.icon} />
      )}
      <TextInput style={styles.input} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: border.width,
    borderRadius: border.radius,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
  },
});

export default ModTextInput;
