import React, { useEffect, useContext, useState } from "react";
import { StyleSheet, View } from "react-native";

import AuthContext from "../auth/context";
import postsApi from "../api/posts";
import useApi from "../hooks/useApi";
import reviewsApi from "../api/reviews";

import ModText from "../components/ModText";
import PostList from "../components/PostList";
import ActivityIndicator from "../components/ActivityIndicator";
import TouchableText from "../components/TouchableText";
import ErrorMessage from "../components/ErrorMessage";

function ProfileScreen() {
  const { user } = useContext(AuthContext);
  const [havePost, setHavePost] = useState();

  const {
    data: allPosts,
    loading: postLoading,
    error: postError,
    request: loadForPosts,
  } = useApi(postsApi.getUserPosts);
  const {
    data: userInfo,
    loading: userLoading,
    error: userError,
    request: loadForUser,
  } = useApi(reviewsApi.getReviews);

  useEffect(() => {
    loadAll();
  }, []);

  const loadAll = () => {
    loadForPosts(user.id);
    loadForUser(user.id);

    // if (Array.isArray(allPosts) == false && postError == false) {
    //   setHavePost(false);
    // } else {
    //   setHavePost(true);
    // }
  };

  // const loadUser = () => {
  //   loadForUser(user.id);
  // };

  return (
    <View style={styles.container}>
      <ActivityIndicator visible={postLoading} />

      <View style={styles.info}>
        <ModText>Username: {userInfo.username}</ModText>
        <ModText>Email: {userInfo.email}</ModText>
        <ModText>Friendcode: {userInfo.friendcode}</ModText>
        <ModText>My score: {userInfo.score}</ModText>
      </View>

      <ModText>Your posts:</ModText>

      {postError && (
        <View style={styles.loadErrorArea}>
          <ErrorMessage error="Could not load posts" visible={postError} />
          <TouchableText onPress={loadPosts}>Retry</TouchableText>
        </View>
      )}

      <View style={styles.loadErrorArea}>
        <ErrorMessage
          error="You don't have any post yet"
          visible={!Array.isArray(allPosts)}
          color="black"
          isItalic={true}
        />
      </View>

      <View style={styles.posts}>
        <PostList
          listData={allPosts}
          deletion={true}
          request={false}
          onRefresh={loadAll}
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
