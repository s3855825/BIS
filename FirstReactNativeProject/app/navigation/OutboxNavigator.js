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
import TouchableIcon from "../components/TouchableIcon";

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
            <TouchableIcon
              onPress={() => navigation.openDrawer()}
              style={header.leftBtn}
              size={40}
              matIcon="menu"
            />
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
