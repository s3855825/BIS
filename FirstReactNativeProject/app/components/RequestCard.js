import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";

import colors from "../config/colors";
import edge from "../config/edge";
import ModButton from "./ModButton";

function RequestCard({ title, message, onPress, id, status }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.cardHeader}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      </View>

      <View style={styles.cardBody}>
        <Text style={styles.contentText}>{message}</Text>
      </View>

      <View style={styles.cardFooter}>
        {status && <Text>Status: {status}</Text>}
        {!status && (
          <>
            <ModButton title="Decline" onPress={() => alert("TODO")} />
            <ModButton title="Approve" onPress={() => alert("TODO")} />
          </>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderRadius: edge.global,
    backgroundColor: colors.inputbg,
  },
  cardHeader: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  cardSubHeader: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 5,
  },
  cardSubHeader1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  cardSubHeader2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
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
    fontSize: 18,
  },
  subText: {
    fontSize: 13,
    fontStyle: "italic",
  },
  contentText: {
    fontSize: 14,
  },
  buttonText: {
    color: colors.todo,
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
