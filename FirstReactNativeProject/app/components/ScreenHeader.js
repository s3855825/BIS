import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

import bgColor from "../config/bgColor";
import border from "../config/border";

function ScreenHeader({ title, rightButton }) {
  const navigation = useNavigation();

  return (
    <View style={[styles.header]}>
      <Pressable
        style={styles.hamburger}
        onPress={() => navigation.openDrawer()}
      >
        <MaterialIcons name="menu" size={40} />
      </Pressable>
      <View style={styles.titleCon}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      {rightButton && (
        <TouchableOpacity onPress={rightButton} style={styles.rightBtn}>
          <MaterialIcons name="add" size={40} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: bgColor.header,
    borderTopWidth: border.width,
    borderBottomWidth: border.width,
    elevation: border.shadow,
    height: 50,
  },
  hamburger: {
    width: 50,
    borderTopRightRadius: border.radius,
    borderBottomRightRadius: border.radius,
    borderRightWidth: border.width,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  titleCon: {
    flex: 1,
  },
  titleText: {
    fontSize: 22,
    fontWeight: "bold",
    paddingLeft: 15,
  },
  rightBtn: {
    paddingRight: 5,
  },
});

export default ScreenHeader;
