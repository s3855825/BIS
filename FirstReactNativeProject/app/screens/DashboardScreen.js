import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Formik } from "formik";

import colors from "../config/colors";

import ScreenHeader from "../components/ScreenHeader";
import Screen from "../components/Screen";
import ModButton from "../components/ModButton";
import postsApi from "../api/posts";
import PostList from "../components/PostList";
import ModTextInput from "../components/ModTextInput";
import useApi from "../hooks/useApi";

export default function DashboardScreen({ navigation }) {
  const [searching, setSearching] = useState(false);

  const { data: posts, request: loadPosts } = useApi(postsApi.getPosts);
  const { data: searchData, request: searchPosts } = useApi(
    postsApi.searchPosts
  );

  useEffect(() => {
    loadPosts();
  }, []);

  // const handleSubmit = ({ searchText }) => {
  //   searchPosts(searchText);
  //   setSearching(True);
  // };

  return (
    <Screen style={styles.container}>
      <ScreenHeader title="Dashboard" />
      <View style={styles.body}>
        <View style={styles.searchArea}>
          <Formik initialValues={{ searchText: "" }}>
            {({ handleChange, handleSubmit }) => (
              <>
                <ModTextInput
                  placeholder="search for post..."
                  placeholderTextColor={"black"}
                  style={{ width: "95%" }}
                  onChangeText={handleChange("searchText")}
                />
                <TouchableOpacity
                  // onPress={handleSubmit}
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: 10,
                  }}
                >
                  <Text>OK</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </View>
        <View style={styles.buttonArea}>
          <ModButton title="Reload Posts" onPress={loadPosts} />
          <ModButton
            title="Create Posts"
            onPress={() => navigation.navigate("CreatePosts")}
          />
        </View>
        <View style={styles.postArea}>
          <PostList listData={searching ? searchData : posts} />
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
