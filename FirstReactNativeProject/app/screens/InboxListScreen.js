import React, { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";

import colors from "../config/colors";
import requestsApi from "../api/requests";
import AuthContext from "../auth/context";
import useApi from "../hooks/useApi";

import ScreenHeader from "../components/ScreenHeader";
import Screen from "../components/Screen";
import RequestList from "../components/RequestList";

export default function InboxListScreen({ navigation }) {
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
    <Screen style={styles.container}>
      <ScreenHeader title="Join Request" />
      <View style={styles.body}>
        <RequestList listData={allInbox} status={true} onRefresh={loadInbox} />
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
});
