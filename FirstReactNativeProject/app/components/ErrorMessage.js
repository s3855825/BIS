import React from "react";
import { StyleSheet, Text } from "react-native";

import textColor from "../config/textColor";

function ErrorMessage({
  visible,
  error,
  color = textColor.error,
  isItalic = false,
}) {
  if (!visible || !error) return null;

  return (
    <Text
      style={[
        styles.error,
        { color: color, fontStyle: isItalic ? "italic" : "normal" },
      ]}
    >
      {error}
    </Text>
  );
}

const styles = StyleSheet.create({
  error: {
    fontSize: 16,
  },
});

export default ErrorMessage;
