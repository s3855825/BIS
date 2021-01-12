import React, { useState, useEffect } from "react";
import { View, Modal } from "react-native";

import useApi from "../hooks/useApi";
import postsApi from "../api/posts";
import barNList from "../styles/barNList";

import Screen from "../components/Screen";
import ScreenHeader from "../components/ScreenHeader";
import SearchBar from "../components/SearchBar";
import PostList from "../components/PostList";
import ModForm from "../components/ModForm";
import TouchableText from "../components/TouchableText";
import CreatePostScreen from "./CreatePostScreen";

export default function DashboardScreen({ navigation }) {
  const [searching, setSearching] = useState(false);
  const [modalOn, setModalOn] = useState(false);

  const { data: allData, request: loadForData } = useApi(postsApi.getPosts);
  const { data: searchData, request: searchForData } = useApi(
    postsApi.searchForData
  );

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    loadForData();
    setSearching(false);
  };

  const handleSubmit = ({ searchText }) => {
    console.log(searchText);
    searchForData(searchText);
    setSearching(true);
  };

  return (
    <Screen style={barNList.container}>
      <ScreenHeader title="Dashboard" />

      <View style={barNList.body}>
        <View style={barNList.searchArea}>
          <ModForm initialValues={{ searchText: "" }} onSubmit={handleSubmit}>
            <SearchBar
              placeholder="search for post..."
              placeholderTextColor={"black"}
              style={{ width: "95%" }}
              name="searchText"
            />
          </ModForm>
        </View>

        <View style={barNList.buttonArea}>
          <TouchableText onPress={() => setModalOn(true)}>
            Create a post
          </TouchableText>
        </View>

        <View style={barNList.postArea}>
          <PostList
            listData={searching ? searchData : allData}
            onRefresh={() => loadData()}
            request={true}
          />
        </View>
      </View>

      <Modal
        visible={modalOn}
        animationType="slide"
        onRequestClose={() => {
          setModalOn(false);
        }}
      >
        <CreatePostScreen />
      </Modal>
    </Screen>
  );
}
