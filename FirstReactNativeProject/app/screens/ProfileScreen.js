import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import ModText from "../components/ModText";
import Screen from "../components/Screen";
import accountsApi from "../api/accounts";
import ScreenHeader from "../components/ScreenHeader";
import ModButton from "../components/ModButton";
import AuthContext from "../auth/context";
import PostList from "../components/PostList";
import useApi from "../hooks/useApi";

function ProfileScreen() {
  const { user } = useContext(AuthContext);
  const { data: posts, error, request: loadPosts } = useApi(
    accountsApi.getUserPosts
  );

  useEffect(() => {
    loadPosts(user.id);
  }, []);

  return (
    <Screen>
      <ScreenHeader title="Profile" />
      <View style={styles.container}>
        <ModButton
          title="Reload"
          onPress={loadPosts}
          style={{ marginTop: 10, width: "50%" }}
        />
        <View style={styles.info}>
          <ModText>Username: {user.username}</ModText>
          <ModText>Email: {user.email}</ModText>
        </View>
        <ModText style={styles.posts}>Your posts:</ModText>
        <PostList listData={posts} visible={true} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  info: {
    justifyContent: "center",
    alignItems: "flex-start",
    paddingVertical: 20,
  },
  posts: {
    marginBottom: 10,
  },
});

export default ProfileScreen;
