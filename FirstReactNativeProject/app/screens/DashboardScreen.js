import React, { useState, useEffect } from "react";
import { View } from "react-native";
import * as Yup from "yup";

import useApi from "../hooks/useApi";
import postsApi from "../api/posts";
import barList from "../styles/barList";

import SearchBar from "../components/SearchBar";
import PostList from "../components/PostList";
import ModForm from "../components/ModForm";
import ActivityIndicator from "../components/ActivityIndicator";
import ErrorMessage from "../components/ErrorMessage";
import TouchableText from "../components/TouchableText";

const validationSchema = Yup.object().shape({
  searchText: Yup.string().label("Search"),
});

export default function DashboardScreen({ navigation }) {
  const [searching, setSearching] = useState(false);
  const [havePost, setHavePost] = useState();
  const [haveSearch, setHaveSearch] = useState();

  const {
    data: allData,
    loading: loadAll,
    error: errorAll,
    request: loadForData,
  } = useApi(postsApi.getPosts);

  const {
    data: searchData,
    loading: loadSearch,
    error: errorSearch,
    request: searchForData,
  } = useApi(postsApi.searchPosts);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    loadForData();

    if (Array.isArray(allData)) {
      setHavePost(true);
    } else {
      setHavePost(false);
    }

    setHaveSearch(true);
    setSearching(false);
  };

  const handleSubmit = ({ searchText }) => {
    searchForData(searchText);

    if (searchData.length != 0) {
      setHaveSearch(true);
    } else {
      setHaveSearch(false);
    }

    setHavePost(true);
    setSearching(true);
  };

  return (
    <View style={barList.container}>
      <ActivityIndicator visible={!searching ? loadAll : loadSearch} />

      <View style={barList.searchArea}>
        <ModForm
          initialValues={{ searchText: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <SearchBar
            placeholder="search for post..."
            placeholderTextColor={"black"}
            style={{ width: "95%" }}
            name="searchText"
          />
        </ModForm>
      </View>

      {(!searching ? errorAll || !havePost : errorSearch || !haveSearch) && (
        <View style={barList.loadErrorArea}>
          <ErrorMessage
            error={
              !searching
                ? "Could not load posts"
                : "Could not get search result"
            }
            visible={!searching ? errorAll : errorSearch}
          />
          <ErrorMessage
            error={!searching ? "There isn't any post yet" : "No result"}
            visible={!searching ? !havePost : !haveSearch}
          />
        </View>
      )}

      <View style={barList.listArea}>
        <PostList
          listData={!searching ? allData : searchData}
          onRefresh={loadData}
          request={true}
        />
      </View>
    </View>
  );
}
