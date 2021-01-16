import React from "react";
import { Text, View, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import border from "../config/border";
import bgColor from "../config/bgColor";
import postsApi from "../api/posts";
import card from "../styles/card";

import TouchableText from "./TouchableText";

function PostCard({ item, request, cardPress, requestPress, deletion }) {
  const handlePress = async () => {
    const request = await postsApi.deletePost(item.id);

    if (!request.ok) {
      console.log(request.problem);
      Alert.alert("Error!", "Can not delete post.");
      return;
    }

    console.log("OK");
  };

  const showConfirmation = () => {
    Alert.alert(
      "Delete post",
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
    <TouchableOpacity style={card.container} onPress={cardPress}>
      <View style={card.headerArea}>
        <View style={card.titleCon}>
          <Text style={card.titleText}>{item.title}</Text>
        </View>
        {deletion && (
          <TouchableText onPress={showConfirmation} style={card.btnText}>
            Delete
          </TouchableText>
        )}
      </View>

      <View style={card.subHeaderCon}>
        <Text style={card.subText}>Author: {item.author_name}</Text>
      </View>

      <View style={card.bodyArea}>
        <Text style={card.bodyText} numberOfLines={3} ellipsizeMode="tail">
          {item.message}
        </Text>
      </View>

      <View style={card.btnCon}>
        {request && (
          <TouchableText onPress={requestPress} style={card.btnText}>
            Request
          </TouchableText>
        )}
      </View>
    </TouchableOpacity>
  );
}

export default PostCard;
