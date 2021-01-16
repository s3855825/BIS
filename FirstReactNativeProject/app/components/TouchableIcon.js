import React from "react";
import { TouchableOpacity } from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";

function TouchableIcon({
  style,
  onPress,
  matComIcon,
  matIcon,
  antIcon,
  size,
  color,
}) {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      {matComIcon && (
        <MaterialCommunityIcons name={matComIcon} size={size} color={color} />
      )}
      {matIcon && <MaterialIcons name={matIcon} size={size} color={color} />}
      {antIcon && <AntDesign name={antIcon} size={size} color={color} />}
    </TouchableOpacity>
  );
}

export default TouchableIcon;
