import React from "react";
import { Alert } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import routes from "./routes";
import bgColor from "../config/bgColor";
import textColor from "../config/textColor";
import header from "../styles/header";

import DashboardScreen from "../screens/DashboardScreen";
import PostDetailScreen from "../screens/PostDetailScreen";
import SendRequestScreen from "../screens/SendRequestScreen";
import TouchableIcon from "../components/TouchableIcon";

const Stack = createStackNavigator();

function DashboardNavigator() {
  const navigation = useNavigation();

  const showConfirmation = () => {
    Alert.alert(
      "Tips",
      "If you want to create your own post, go to the info section in your group, there, you will find a creat post button that you can use to recruit members.",
      [
        {
          text: "OK",
          style: "cancel",
        },
      ],
      { onDismiss: () => {} }
    );
  };

  return (
    <Stack.Navigator
      initialRouteName={routes.DASHBOARD}
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
        name={routes.DASHBOARD}
        component={DashboardScreen}
        options={{
          headerLeft: () => (
            <TouchableIcon
              onPress={() => navigation.openDrawer()}
              style={header.leftBtn}
              matIcon="menu"
              size={40}
            />
          ),
          headerRight: () => (
            <TouchableIcon
              onPress={showConfirmation}
              style={header.rightBtn}
              antIcon="questioncircleo"
              size={28}
            />
          ),
        }}
      />
      <Stack.Screen
        name={routes.POST_DETAILS}
        component={PostDetailScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerRight: () => (
            <TouchableIcon
              onPress={() =>
                navigation.navigate(routes.SEND_REQUESTS, route.params)
              }
              style={header.rightBtn}
              size={30}
              matComIcon="email-edit"
            />
          ),
        })}
      />
      <Stack.Screen
        name={routes.SEND_REQUESTS}
        options={{ title: "Send Request" }}
        component={SendRequestScreen}
      />
    </Stack.Navigator>
  );
}

export default DashboardNavigator;
