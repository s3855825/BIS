import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { useState } from "react/cjs/react.development";

import PostCard from "./PostCard";
import PostSeparator from "./PostSeparator";

function PostList({ listData, deletion, onRefresh, request }) {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);

  return (
    <FlatList
      data={listData}
      keyExtractor={(post) => post.id.toString()}
      renderItem={({ item }) => (
        <PostCard
          title={item.title}
          message={item.message}
          postId={item.id}
          deletion={deletion}
          request={request}
          onPress={() => navigation.navigate("PostDetails", item)}
        />
      )}
      ItemSeparatorComponent={PostSeparator}
      refreshing={refreshing}
      onRefresh={onRefresh}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PostList;
