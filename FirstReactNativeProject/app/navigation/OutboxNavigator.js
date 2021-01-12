import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import OutboxListScreen from "../screens/OutboxListScreen";
import RequestDetailsScreen from "../screens/RequestDetailsScreen";
import routes from "./routes";

const Stack = createStackNavigator();

function OutboxNavigator() {
  return (
    <Stack.Navigator initialRouteName={routes.OUTBOX_LIST}>
      <Stack.Screen
        name={routes.OUTBOX_LIST}
        component={OutboxListScreen}
        options={{ headerShown: false }}
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
