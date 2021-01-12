import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

function ModButton({ style, textStyle, title, ...otherProps }) {
  return (
    <TouchableOpacity style={[styles.container, style]} {...otherProps}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignItems: "center",
  },
});

export default ModButton;
