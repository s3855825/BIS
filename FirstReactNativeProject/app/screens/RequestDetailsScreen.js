import React from "react";
import { Text, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import ModButton from "../components/ModButton";

function RequestDetailsScreen({ route }) {
  const requestData = route.params;
  const isSender = requestData.sender_name ? true : false;

  return (
    <Screen>
      <Text>{requestData.title}</Text>
      <Text>
        {isSender ? requestData.sender_name : requestData.receiver_name}
      </Text>
      <Text>From post: {requestData.post_title}</Text>
      <Text>{requestData.message}</Text>

      {isSender && (
        <>
          <ModButton title="Decline" onPress={() => alert("TODO")} />
          <ModButton title="Approve" onPress={() => alert("TODO")} />
        </>
      )}
      {!isSender && <Text>Status: {requestData.status}</Text>}
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default RequestDetailsScreen;
