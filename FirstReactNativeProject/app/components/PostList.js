import React, { useState } from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import PostCard from "./PostCard";
import PostSeparator from "./PostSeparator";
import routes from "../navigation/routes";

function PostList({ listData, deletion, onRefresh, request }) {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);

  return (
    <FlatList
      data={listData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <PostCard
          title={item.title}
          message={item.message}
          postId={item.id}
          deletion={deletion}
          request={request}
          requestPress={() => navigation.navigate(routes.SEND_REQUESTS, item)}
          onPress={() => navigation.navigate(routes.POST_DETAILS, item)}
        />
      )}
      ItemSeparatorComponent={PostSeparator}
      refreshing={refreshing}
      onRefresh={onRefresh}
    />
  );
}

export default PostList;
