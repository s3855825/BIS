import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import colors from "../config/colors";

import ScreenHeader from "../components/ScreenHeader";
import Screen from "../components/Screen";
import ModButton from "../components/ModButton";
import postsApi from "../api/posts";
import PostList from "../components/PostList";
import useApi from "../hooks/useApi";
import ModForm from "../components/ModForm";
import ModFormField from "../components/ModFormField";
import SearchBar from "../components/SearchBar";

export default function DashboardScreen({ navigation }) {
  const [searching, setSearching] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const { data: allPosts, request: loadForPosts } = useApi(postsApi.getPosts);
  const { data: searchData, request: searchPosts } = useApi(
    postsApi.searchPosts
  );

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = () => {
    loadForPosts();
    setSearching(false);
  };

  const handleSubmit = ({ searchText }) => {
    searchPosts(searchText);
    setSearching(true);
  };

  return (
    <Screen style={styles.container}>
      <ScreenHeader title="Dashboard" />
      <View style={styles.body}>
        <View style={styles.searchArea}>
          <ModForm initialValues={{ searchText: "" }} onSubmit={handleSubmit}>
            <SearchBar
              placeholder="search for post..."
              placeholderTextColor={"black"}
              style={{ width: "95%" }}
              name="searchText"
            />
          </ModForm>
        </View>
        <View style={styles.buttonArea}>
          <ModButton title="Reload Posts" onPress={loadPosts} />
          <ModButton
            title="Create Posts"
            onPress={() => navigation.navigate("CreatePosts")}
          />
        </View>
        <View style={styles.postArea}>
          <PostList
            listData={searching ? searchData : allPosts}
            onRefresh={loadPosts}
            request={true}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.screen,
  },
  body: {
    flex: 1,
    padding: 20,
  },
  searchArea: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  buttonArea: {
    flexDirection: "row",
    paddingVertical: 20,
    justifyContent: "space-evenly",
  },
  postArea: {
    flex: 1,
    marginBottom: 10,
  },
});
