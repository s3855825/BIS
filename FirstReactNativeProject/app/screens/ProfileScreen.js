import React, { useEffect, useContext } from "react";
import { StyleSheet, View } from "react-native";

import AuthContext from "../auth/context";
import postsApi from "../api/posts";
import useApi from "../hooks/useApi";

import ModText from "../components/ModText";
import PostList from "../components/PostList";
import ActivityIndicator from "../components/ActivityIndicator";
import TouchableText from "../components/TouchableText";
import ErrorMessage from "../components/ErrorMessage";

function ProfileScreen() {
  const { user } = useContext(AuthContext);
  const { data, loading, error, request } = useApi(postsApi.getUserPosts);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = () => {
    request(user.id);
  };

  return (
    <View style={styles.container}>
      <ActivityIndicator visible={loading} />

      <View style={styles.info}>
        <ModText>Username: {user.username}</ModText>
        <ModText>Email: {user.email}</ModText>
        <ModText>Friendcode: {user.friendcode}</ModText>
      </View>

      <ModText>Your posts:</ModText>

      {error && (
        <View style={styles.loadErrorArea}>
          <ErrorMessage error="Could not load posts" visible={error} />
          <TouchableText onPress={loadPosts}>Retry</TouchableText>
        </View>
      )}

      <View style={styles.posts}>
        <PostList
          listData={data}
          deletion={true}
          request={false}
          onRefresh={loadPosts}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  info: {
    justifyContent: "center",
    alignItems: "flex-start",
    paddingVertical: 20,
  },
  posts: {
    flex: 1,
    marginTop: 10,
  },
  loadErrorArea: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileScreen;
