import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import GroupListScreen from "../screens/GroupListScreen";
import GroupDetailScreen from "../screens/GroupDetailScreen";
import CreateGroupScreen from "../screens/CreateGroupScreen";
import CreateTasksScreen from "../screens/CreateTasksScreen";
import routes from "./routes";
import DashboardScreen from "../screens/DashboardScreen";

const Stack = createStackNavigator();

function GroupNavigator() {
  return (
    <Stack.Navigator initialRouteName={routes.GROUPS}>
      <Stack.Screen
        name={routes.GROUPS}
        component={GroupListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="CreateGroups" component={CreateGroupScreen} />
      <Stack.Screen
        name="GroupDetails"
        component={GroupDetailScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
      <Stack.Screen name="CreateTasks" component={CreateTasksScreen} />
    </Stack.Navigator>
  );
}

export default GroupNavigator;
