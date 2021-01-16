import React, { useContext, useEffect } from "react";
import { View } from "react-native";

import barList from "../styles/barList";

import RequestList from "../components/RequestList";
import requestsApi from "../api/requests";
import useApi from "../hooks/useApi";
import AuthContext from "../auth/context";
import ActivityIndicator from "../components/ActivityIndicator";
import ErrorMessage from "../components/ErrorMessage";
import TouchableText from "../components/TouchableText";

export default function OutboxListScreen() {
  const { user } = useContext(AuthContext);
  const { data, loading, error, request } = useApi(requestsApi.getOutbox);

  useEffect(() => {
    loadOutbox();
  }, []);

  const loadOutbox = () => {
    request(user.id);
  };

  return (
    <View style={barList.container}>
      <ActivityIndicator visible={loading} />

      {error && (
        <View style={barList.loadErrorArea}>
          <ErrorMessage error="Could not load requests" visible={error} />
          <TouchableText onPress={loadOutbox}>Retry</TouchableText>
        </View>
      )}

      <View style={barList.body}>
        <RequestList
          listData={data}
          status={true}
          onRefresh={() => loadOutbox()}
        />
      </View>
    </View>
  );
}
