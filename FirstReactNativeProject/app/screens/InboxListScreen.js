import React, { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";

import colors from "../config/colors";

import ScreenHeader from "../components/ScreenHeader";
import Screen from "../components/Screen";
import ModButton from "../components/ModButton";
import useApi from "../hooks/useApi";
import RequestList from "../components/RequestList";
import requestsApi from "../api/requests";
import AuthContext from "../auth/context";

const allInbox = [
  {
    title: "hello",
    message: "Hello2",
    sender_name: "hello3",
    post_title: "hello4",
    id: 1,
  },
];

export default function InboxListScreen({ navigation }) {
  const { user } = useContext(AuthContext);
  const { data, request: loadInbox } = useApi(requestsApi.getInbox);

  useEffect(() => {
    loadInbox(user.id);
  }, []);

  return (
    <Screen style={styles.container}>
      <ScreenHeader title="Join Request" />
      <View style={styles.body}>
        <RequestList listData={allInbox} status={true} />
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
