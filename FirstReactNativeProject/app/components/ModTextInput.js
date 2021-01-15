import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

import border from "../config/border";

function ModTextInput({ icon, style, ...otherProps }) {
  return (
    <View style={[styles.container, style]}>
      {icon && (
        <MaterialConmunityIcons
          name={icon}
          size={20}
          color="grey"
          style={styles.icon}
        />
      )}
      <TextInput {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: border.width,
    borderRadius: border.radius,
    justifyContent: "center",
  },
});

export default ModTextInput;
