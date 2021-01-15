import React, { useState } from "react";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialIcons } from "@expo/vector-icons";

import routes from "./routes";
import bgColor from "../config/bgColor";
import textColor from "../config/textColor";
import header from "../styles/header";

import GroupListScreen from "../screens/GroupListScreen";
import GroupDetailScreen from "../screens/GroupDetailScreen";

const Stack = createStackNavigator();

function GroupNavigator() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      initialRouteName={routes.GROUPS}
      screenOptions={{
        headerStyle: {
          backgroundColor: bgColor.header,
        },
        headerTintColor: textColor.header,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name={routes.GROUPS}
        component={GroupListScreen}
        options={{
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.openDrawer()}
              style={header.leftBtn}
            >
              <MaterialIcons name="menu" size={40} />
            </Pressable>
          ),
        }}
      ></Stack.Screen>
      <Stack.Screen
        name={routes.GROUP_DETAILS}
        component={GroupDetailScreen}
        options={({ route }) => ({ title: route.params.group_name })}
      />
    </Stack.Navigator>
  );
}

export default GroupNavigator;
