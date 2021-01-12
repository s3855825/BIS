import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

function TouchableText({ children, style, onPress, ...otherProps }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.text, style]} {...otherProps}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default TouchableText;
