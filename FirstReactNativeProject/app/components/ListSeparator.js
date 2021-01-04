import React from "react";
import { StyleSheet, View } from "react-native";

function ListSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    marginVertical: 5,
  },
});

export default ListSeparator;
