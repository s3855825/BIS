import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet } from "react-native";

import PostCard from "./PostCard";
import PostSeparator from "./PostSeparator";

function PostList({ listData, visible }) {
  const navigation = useNavigation();

  return (
    <FlatList
      data={listData}
      keyExtractor={(post) => post.id.toString()}
      renderItem={({ item }) => (
        <PostCard
          title={item.title}
          message={item.message}
          postId={item.id}
          visible={visible}
          onPress={() => navigation.navigate("PostDetails", item)}
        />
      )}
      ItemSeparatorComponent={PostSeparator}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PostList;
