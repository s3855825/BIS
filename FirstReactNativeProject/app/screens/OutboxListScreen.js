import React, { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";

import colors from "../config/colors";

import ScreenHeader from "../components/ScreenHeader";
import Screen from "../components/Screen";
import ModButton from "../components/ModButton";
import RequestList from "../components/RequestList";
import requestsApi from "../api/requests";
import useApi from "../hooks/useApi";
import AuthContext from "../auth/context";

export default function OutboxListScreen({ navigation }) {
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
    <Screen style={styles.container}>
      <ScreenHeader title="Sent Request" />
      <View style={styles.body}>
        <RequestList
          listData={allOutbox}
          status={true}
          onRefresh={() => loadOutbox()}
        />
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
