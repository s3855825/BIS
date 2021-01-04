import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";

import colors from "../config/colors";
import edge from "../config/edge";
import postsApi from "../api/posts";

function PostCard({ title, message, onPress, postId, visible }) {
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
      "Delete Post",
      "Are you sure to delete this post?",
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
    <TouchableOpacity style={styles.postCard} onPress={onPress}>
      <View style={styles.cardHeader}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        {visible && (
          <TouchableOpacity onPress={showConfirmation} style={styles.delete}>
            <Text style={styles.deleteText}>Delete</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* <View style={styles.cardSubHeader}>
        <View style={styles.cardSubHeader1}>
          <Text style={styles.subText}>{author}</Text>
        </View>
        <View style={styles.cardSubHeader2}>
          <Text style={styles.subText}>{hashtag}</Text>
        </View>
      </View> */}

      <View style={styles.cardBody}>
        <Text style={styles.contentText}>{message}</Text>
      </View>

      <View style={styles.cardFooter}>
        <TouchableOpacity
          style={styles.requestButton}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert("TODO")}
        >
          <Text style={styles.buttonText}>Request</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  postCard: {
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
  cardSubHeader: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 5,
  },
  cardSubHeader1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  cardSubHeader2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
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
  subText: {
    fontSize: 13,
    fontStyle: "italic",
  },
  contentText: {
    fontSize: 14,
  },
  buttonText: {
    color: colors.todo,
    fontWeight: "bold",
  },
  delete: {
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 10,
  },
  deleteText: {
    fontStyle: "italic",
  },
  title: {
    flex: 1,
    paddingLeft: 10,
  },
});

export default PostCard;
