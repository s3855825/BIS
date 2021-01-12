import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import PostSeparator from "./PostSeparator";
import RequestCard from "./RequestCard";
import routes from "../navigation/routes";

function RequestList({ listData, status = false, onRefresh }) {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);

  return (
    <FlatList
      data={listData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <RequestCard
          title={item.request_title}
          message={item.message}
          id={item.id}
          status={status ? item.status : null}
          onPress={() => navigation.navigate(routes.REQUEST_DETAILS, item)}
        />
      )}
      ItemSeparatorComponent={PostSeparator}
      refreshing={refreshing}
      onRefresh={onRefresh}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RequestList;
