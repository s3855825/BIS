import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import InboxListScreen from "../screens/InboxListScreen";
import RequestDetailsScreen from "../screens/RequestDetailsScreen";
import routes from "./routes";

const Stack = createStackNavigator();

function InboxNavigator() {
  return (
    <Stack.Navigator initialRouteName={routes.INBOX_LIST}>
      <Stack.Screen
        name={routes.INBOX_LIST}
        component={InboxListScreen}
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

export default InboxNavigator;
