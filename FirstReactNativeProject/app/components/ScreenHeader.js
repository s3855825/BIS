import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import edge from "../config/edge";

function ScreenHeader({ title }) {
  const navigation = useNavigation();

  return (
    <View style={[styles.header]}>
      <Pressable
        style={styles.hamburger}
        onPress={() => navigation.openDrawer()}
      >
        <MaterialIcons name="menu" size={40} />
      </Pressable>
      <View>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.heading,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    height: 50,
  },
  titleText: {
    fontSize: 22,
    fontWeight: "bold",
    paddingLeft: 15,
  },
  hamburger: {
    width: 50,
    borderTopRightRadius: edge.global,
    borderBottomRightRadius: edge.global,
    borderRightWidth: 2,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ScreenHeader;
