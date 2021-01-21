import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import bgColor from "../config/bgColor";
import requestsApi from "../api/requests";
import AuthContext from "../auth/context";
import useApi from "../hooks/useApi";
import barList from "../styles/barList";

import RequestList from "../components/RequestList";
import ActivityIndicator from "../components/ActivityIndicator";
import ErrorMessage from "../components/ErrorMessage";
import TouchableText from "../components/TouchableText";

export default function InboxListScreen() {
  const { user } = useContext(AuthContext);
  const { data, loading, error, request } = useApi(requestsApi.getInbox);

  useEffect(() => {
    loadInbox();
  }, []);

  const loadInbox = () => {
    request(user.id);
  };

  return (
    <View style={barList.container}>
      <ActivityIndicator visible={loading} />

      {error && (
        <View style={barList.loadErrorArea}>
          <ErrorMessage error="Could not load requests" visible={error} />
          <Text>Pull to retry</Text>
        </View>
      )}

      <View style={barList.loadErrorArea}>
        <ErrorMessage
          error="Your inbox is empty"
          visible={!Array.isArray(data)}
          color="black"
        />
      </View>

      <View style={barList.listArea}>
        <RequestList
          listData={data}
          status={true}
          onRefresh={loadInbox}
          isInbox={true}
        />
      </View>
    </View>
  );
}
