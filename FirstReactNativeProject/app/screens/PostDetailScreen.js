import React from "react";
import { Text, StyleSheet } from "react-native";

import Screen from "../components/Screen";

function PostDetailScreen({ route }) {
  const postInfo = route.params;

  return (
    <Screen style={styles.container}>
      <Text style={styles.title}>{postInfo.author_name}</Text>
      <Text style={styles.message}>{postInfo.message}</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  message: {
    fontSize: 18,
  },
});

export default PostDetailScreen;
