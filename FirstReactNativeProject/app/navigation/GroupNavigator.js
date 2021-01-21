import React from "react";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import routes from "./routes";
import bgColor from "../config/bgColor";
import textColor from "../config/textColor";
import header from "../styles/header";

import GroupListScreen from "../screens/GroupListScreen";
import GroupDetailScreen from "../screens/GroupDetailScreen";
import GroupInfoScreen from "../screens/GroupInfoScreen";
import TouchableIcon from "../components/TouchableIcon";
import TaskDetailsScreen from "../screens/TaskDetailsScreen";
import AddReviewsScreen from "../screens/AddReviewsScreen";
import CreatePostScreen from "../screens/CreatePostScreen";

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
            <TouchableIcon
              onPress={() => navigation.openDrawer()}
              style={header.leftBtn}
              size={40}
              matIcon="menu"
            />
          ),
        }}
      ></Stack.Screen>
      <Stack.Screen
        name={routes.GROUP_DETAILS}
        component={GroupDetailScreen}
        options={({ route }) => ({
          title: route.params.group_name,
          headerRight: () => (
            <TouchableIcon
              onPress={() =>
                navigation.navigate(routes.GROUP_INFO, route.params)
              }
              style={header.rightBtn}
              size={32}
              matIcon="info-outline"
            />
          ),
        })}
      />
      <Stack.Screen
        name={routes.GROUP_INFO}
        options={{ title: "Info" }}
        component={GroupInfoScreen}
      />
      <Stack.Screen
        name={routes.TASK_DETAILS}
        options={{ title: "Details" }}
        component={TaskDetailsScreen}
      />
      <Stack.Screen
        name={routes.CREATE_REVIEWS}
        options={{ title: "Reviews" }}
        component={AddReviewsScreen}
      />
      <Stack.Screen
        name={routes.CREATE_POSTS}
        options={{ title: "Create Post" }}
        component={CreatePostScreen}
      />
    </Stack.Navigator>
  );
}

export default GroupNavigator;
