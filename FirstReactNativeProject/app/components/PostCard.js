import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";

import colors from "../config/colors";
import edge from "../config/edge";
import postsApi from "../api/posts";
import TouchableText from "./TouchableText";
import requestApi from "../api/requests";

function PostCard({
  title,
  message,
  onPress,
  postId,
  deletion,
  request,
  requestPress,
}) {
  const handlePress = async () => {
    const request = await postsApi.deletePost(postId);
    if (!request.ok) {
      console.log(request.problem);
      return;
    }
    console.log("OK");
  };

  const showConfirmation = () => {
    Alert.alert(
      "Delete this post",
      "Are you sure?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: handlePress },
      ],
      { onDismiss: () => {} }
    );
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.cardHeader}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        {deletion && (
          <TouchableText onPress={showConfirmation} style={styles.deleteText}>
            Delete
          </TouchableText>
        )}
      </View>

      <View style={styles.cardBody}>
        <Text style={styles.contentText}>{message}</Text>
      </View>

      <View style={styles.cardFooter}>
        {request && (
          <TouchableText onPress={requestPress} style={styles.requestText}>
            Request
          </TouchableText>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderRadius: edge.global,
    backgroundColor: colors.inputbg,
  },
  cardHeader: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  cardBody: {
    flex: 3,
    padding: 15,
  },
  cardFooter: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  requestButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  titleText: {
    fontSize: 18,
  },
  contentText: {
    fontSize: 14,
  },
  deleteText: {
    fontStyle: "italic",
    fontSize: 14,
  },
  requestText: {
    fontSize: 14,
  },
  title: {
    flex: 1,
    paddingLeft: 10,
  },
});

export default PostCard;
