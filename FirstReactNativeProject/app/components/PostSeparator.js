import React from "react";
import { StyleSheet, View } from "react-native";

function PostSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 2,
    backgroundColor: "black",
    marginVertical: 15,
  },
});

export default PostSeparator;
