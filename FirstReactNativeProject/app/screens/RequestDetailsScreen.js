import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import ModButton from "../components/ModButton";
import requestsApi from "../api/requests";

function RequestDetailsScreen({ route }) {
  const requestData = route.params;
  const isSender = requestData.sender_name ? true : false;

  const handleApprove = () => {
    const response = requestsApi.approve(requestData.id);

    if (!response.ok) {
      console.log(response.problem + response.error + response.data);
    }

    console.log("OK");
  };

  const handleDecline = () => {
    const response = requestsApi.decline(requestData.id);

    if (!response.ok) {
      console.log(response.problem + response.error + response.data);
    }

    console.log("OK");
  };

  return (
    <Screen style={styles.container}>
      <Text style={styles.title}>{requestData.request_title}</Text>
      <Text style={styles.body}>
        Author: {isSender ? requestData.sender_name : requestData.receiver_name}{" "}
        {"\n"}
        From post: {requestData.post_title} {"\n"}
        Message: {"\n"}
        {requestData.message}
      </Text>

      {isSender && (
        <View style={styles.btnArea}>
          <ModButton title="Decline" onPress={() => alert("TODO")} />
          <ModButton
            textStyle={styles.approve}
            title="Approve"
            onPress={handleApprove}
          />
        </View>
      )}
      {!isSender && (
        <Text style={styles.status}>Status: {requestData.status}</Text>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  btnArea: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  body: {
    fontSize: 18,
    paddingVertical: 20,
    lineHeight: 30,
  },
  status: {
    color: "red",
    fontSize: 18,
    alignSelf: "flex-end",
  },
  approve: {
    color: "green",
  },
});

export default RequestDetailsScreen;
