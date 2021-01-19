import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

import border from "../config/border";
import bgColor from "../config/bgColor";

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
    borderWidth: border.width,
    borderRadius: border.radius,
    alignItems: "center",
    backgroundColor: bgColor.button,
  },
});

export default ModButton;
