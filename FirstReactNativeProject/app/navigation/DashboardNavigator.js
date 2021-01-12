import React from "react";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";

import DashboardScreen from "../screens/DashboardScreen";
import PostDetailScreen from "../screens/PostDetailScreen";
import CreatePostScreen from "../screens/CreatePostScreen";
import routes from "./routes";
import SendRequestScreen from "../screens/SendRequestScreen";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();

function DashboardNavigator() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator initialRouteName={routes.DASHBOARD}>
      <Stack.Screen
        name={routes.DASHBOARD}
        component={DashboardScreen}
        options={{
          headerShown: false,
          headerLeft: (props) => (
            <HeaderBackButton
              {...props}
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerStyle: {
            backgroundColor: "red",
          },
        }}
      />
      <Stack.Screen
        name={routes.POST_DETAILS}
        component={PostDetailScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen name={routes.CREATE_POSTS} component={CreatePostScreen} />
      <Stack.Screen name={routes.SEND_REQUESTS} component={SendRequestScreen} />
    </Stack.Navigator>
  );
}

export default DashboardNavigator;
