import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";

import border from "../config/border";
import bgColor from "../config/bgColor";
import textColor from "../config/textColor";
import card from "../styles/card";

function RequestCard({ title, message, onPress, id, status }) {
  return (
    <TouchableOpacity style={card.container} onPress={onPress}>
      <View style={card.headerArea}>
        <View style={card.titleCon}>
          <Text style={card.titleText}>{title}</Text>
        </View>
      </View>

      <View style={card.bodyArea}>
        <Text style={card.bodyText}>{message}</Text>
      </View>

      {status && (
        <View style={card.footerArea}>
          <Text>Status: {status}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: border.width,
    borderRadius: border.radius,
    backgroundColor: bgColor.inputbg,
  },
  cardHeader: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  cardBody: {
    flex: 3,
    padding: 15,
  },
  cardFooter: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  requestButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  subText: {
    fontSize: 13,
    fontStyle: "italic",
  },
  contentText: {
    fontSize: 14,
  },
  buttonText: {
    color: textColor.button,
    fontWeight: "bold",
  },
  delete: {
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 10,
  },
  deleteText: {
    fontStyle: "italic",
  },
  title: {
    flex: 1,
    paddingLeft: 10,
  },
});

export default RequestCard;
