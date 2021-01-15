import React from "react";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialIcons } from "@expo/vector-icons";

import routes from "./routes";
import bgColor from "../config/bgColor";
import textColor from "../config/textColor";
import header from "../styles/header";

import OutboxListScreen from "../screens/OutboxListScreen";
import RequestDetailsScreen from "../screens/RequestDetailsScreen";

const Stack = createStackNavigator();

function OutboxNavigator() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      initialRouteName={routes.OUTBOX_LIST}
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
        name={routes.OUTBOX_LIST}
        component={OutboxListScreen}
        options={{
          title: "Sent Request",
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.openDrawer()}
              style={header.leftBtn}
            >
              <MaterialIcons name="menu" size={40} />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name={routes.REQUEST_DETAILS}
        component={RequestDetailsScreen}
        options={({ route }) => ({ title: route.params.request_title })}
      />
    </Stack.Navigator>
  );
}

export default OutboxNavigator;
