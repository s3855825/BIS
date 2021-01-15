import React, { useState, useEffect } from "react";
import { View } from "react-native";

import useApi from "../hooks/useApi";
import postsApi from "../api/posts";
import barList from "../styles/barList";

import SearchBar from "../components/SearchBar";
import PostList from "../components/PostList";
import ModForm from "../components/ModForm";

export default function DashboardScreen({ navigation }) {
  const [searching, setSearching] = useState(false);

  const { data: allData, request: loadForData } = useApi(postsApi.getPosts);
  const { data: searchData, request: searchForData } = useApi(
    postsApi.searchPosts
  );

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    loadForData();
    setSearching(false);
  };

  const handleSubmit = ({ searchText }) => {
    searchForData(searchText);
    setSearching(true);
  };

  return (
    <View style={barList.container}>
      <View style={barList.searchArea}>
        <ModForm initialValues={{ searchText: "" }} onSubmit={handleSubmit}>
          <SearchBar
            placeholder="search for post..."
            placeholderTextColor={"black"}
            style={{ width: "95%" }}
            name="searchText"
          />
        </ModForm>
      </View>

      <View style={barList.postArea}>
        <PostList
          listData={searching ? searchData : allData}
          onRefresh={() => loadData()}
          request={true}
        />
      </View>
    </View>
  );
}
