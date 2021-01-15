import React from "react";
import { View, Text, ScrollView } from "react-native";

import requestsApi from "../api/requests";
import details from "../styles/details";

import Screen from "../components/Screen";
import ModButton from "../components/ModButton";

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
    <Screen style={details.container}>
      <ScrollView>
        <Text style={details.titleText}>{requestData.request_title}</Text>
        <Text style={details.bodyText}>
          Author:{" "}
          {isSender ? requestData.sender_name : requestData.receiver_name}{" "}
          {"\n"}
          From post: {requestData.post_title} {"\n"}
          Message: {"\n"}
          {requestData.message}
        </Text>

        {isSender && (
          <View style={details.btnArea}>
            <ModButton title="Decline" onPress={() => alert("TODO")} />
            <ModButton
              textStyle={details.posBtnText}
              title="Approve"
              onPress={handleApprove}
            />
          </View>
        )}
        {!isSender && (
          <Text style={details.statusText}>Status: {requestData.status}</Text>
        )}
      </ScrollView>
    </Screen>
  );
}

export default RequestDetailsScreen;
