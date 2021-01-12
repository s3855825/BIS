import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

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
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
  },
});

export default ModTextInput;
