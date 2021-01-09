import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import routes from "../navigation/routes";

import PostSeparator from "./PostSeparator";
import RequestCard from "./RequestCard";

function RequestList({ listData, status }) {
  const navigation = useNavigation();

  return (
    <FlatList
      data={listData}
      keyExtractor={(post) => post.id.toString()}
      renderItem={({ item }) => (
        <RequestCard
          title={item.title}
          message={item.message}
          id={item.id}
          status={status ? item.status : ""}
          onPress={() => navigation.navigate(routes.REQUEST_DETAILS, item)}
        />
      )}
      ItemSeparatorComponent={PostSeparator}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RequestList;
