import React from "react";
import { Text, StyleSheet } from "react-native";

import Screen from "../components/Screen";

function PostDetailScreen({ route }) {
  const postsData = route.params;

  return (
    <Screen>
      <Text>{postsData.author_name}</Text>
      <Text>{postsData.message}</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default PostDetailScreen;
