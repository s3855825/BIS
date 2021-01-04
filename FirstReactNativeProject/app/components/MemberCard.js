import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import edge from "../config/edge";

function MemberCard({ name }) {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    padding: 5,
    paddingLeft: 10,
  },
});

export default MemberCard;
