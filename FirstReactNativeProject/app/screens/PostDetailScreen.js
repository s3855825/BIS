import React from "react";
import { ScrollView, Text, View } from "react-native";

import details from "../styles/details";

function PostDetailScreen({ route }) {
  const postInfo = route.params;

  return (
    <View style={details.container}>
      <ScrollView>
        <Text style={details.titleText}>{postInfo.title}</Text>
        <View style={details.author}>
          <Text style={details.headingText}>Author: </Text>
          <Text style={details.bodyText}>{postInfo.author_name}</Text>
        </View>
        <Text style={details.headingText}>Message:</Text>
        <Text style={details.bodyText}>{postInfo.message}</Text>
      </ScrollView>
    </View>
  );
}

export default PostDetailScreen;
