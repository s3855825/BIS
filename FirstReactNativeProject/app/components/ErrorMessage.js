import React from "react";
import { StyleSheet, Text } from "react-native";

import textColor from "../config/textColor";

function ErrorMessage({ visible, error }) {
  if (!visible || !error) return null;

  return <Text style={styles.error}>{error}</Text>;
}

const styles = StyleSheet.create({
  error: {
    color: textColor.error,
    fontSize: 15,
  },
});

export default ErrorMessage;
