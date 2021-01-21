import React, { useContext } from "react";
import { View, Text, ScrollView } from "react-native";

import requestsApi from "../api/requests";
import details from "../styles/details";

import ModButton from "../components/ModButton";
import TeaContext from "../auth/context";

function RequestDetailsScreen({ route }) {
  const requestData = route.params;
  const { user } = useContext(TeaContext);
  const isSender = requestData.sender_name ? true : false;

  const handleApprove = async () => {
    const result = await requestsApi.replyRequest(
      requestData.id,
      "approve",
      user.id
    );

    if (!result.ok) {
      console.log(result.data);
      return;
    }

    console.log("OK");
  };

  const handleDecline = async () => {
    const result = await requestsApi.replyRequest(
      requestData.id,
      "decline",
      user.id
    );

    if (!result.ok) {
      console.log(result.data);
      return;
    }

    console.log("OK");
  };

  return (
    <View style={details.container}>
      <ScrollView>
        <Text style={details.titleText}>{requestData.request_title}</Text>
        <Text style={details.bodyText}>
          From: {isSender ? requestData.sender_name : requestData.receiver_name}{" "}
          {"\n"}
          From post: {requestData.post_title} {"\n"}
          Message: {"\n"}
          {requestData.message}
        </Text>

        {isSender && (
          <View style={details.btnArea}>
            <ModButton
              title="Decline"
              onPress={handleDecline}
              textStyle={{ color: "red" }}
            />
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
    </View>
  );
}

export default RequestDetailsScreen;
