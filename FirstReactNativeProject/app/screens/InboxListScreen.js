import React, { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";

import bgColor from "../config/bgColor";
import requestsApi from "../api/requests";
import AuthContext from "../auth/context";
import useApi from "../hooks/useApi";

import ScreenHeader from "../components/ScreenHeader";
import Screen from "../components/Screen";
import RequestList from "../components/RequestList";

export default function InboxListScreen() {
  const { user } = useContext(AuthContext);
  const { data: allInbox, request: loadForInbox } = useApi(
    requestsApi.getInbox
  );

  useEffect(() => {
    loadInbox();
  }, []);

  const loadInbox = () => {
    loadForInbox(user.id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <RequestList listData={allInbox} status={true} onRefresh={loadInbox} />
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
