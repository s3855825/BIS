import React, { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";

import bgColor from "../config/bgColor";

import ScreenHeader from "../components/ScreenHeader";
import Screen from "../components/Screen";
import RequestList from "../components/RequestList";
import requestsApi from "../api/requests";
import useApi from "../hooks/useApi";
import AuthContext from "../auth/context";

export default function OutboxListScreen() {
  const { user } = useContext(AuthContext);
  const { data: allOutbox, request: loadForOutbox } = useApi(
    requestsApi.getOutbox
  );

  useEffect(() => {
    loadOutbox();
  }, []);

  const loadOutbox = () => {
    loadForOutbox(user.id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <RequestList
          listData={allOutbox}
          status={true}
          onRefresh={() => loadOutbox()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgColor.screen,
  },
  body: {
    flex: 1,
    padding: 20,
  },
});
