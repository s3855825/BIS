import React from "react";
import { Pressable, StyleSheet, Alert } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import routes from "./routes";
import bgColor from "../config/bgColor";
import textColor from "../config/textColor";
import header from "../styles/header";

import DashboardScreen from "../screens/DashboardScreen";
import PostDetailScreen from "../screens/PostDetailScreen";
import SendRequestScreen from "../screens/SendRequestScreen";
import { TouchableOpacity } from "react-native-gesture-handler";

const Stack = createStackNavigator();

function DashboardNavigator() {
  const navigation = useNavigation();

  const showConfirmation = () => {
    Alert.alert(
      "Create posts",
      "Please navigate to your group to create a post.",
      [
        {
          text: "OK",
          onPress: () => console.log("Cancel Pressed"),
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
            <Pressable
              onPress={() => navigation.openDrawer()}
              style={header.leftBtn}
            >
              <MaterialIcons name="menu" size={40} />
            </Pressable>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={showConfirmation}
              style={header.rightBtn}
            >
              <MaterialIcons name="add" size={40} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name={routes.POST_DETAILS}
        component={PostDetailScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate(routes.SEND_REQUESTS)}
            >
              <MaterialCommunityIcons
                name="email-edit"
                size={30}
                style={header.rightBtn}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name={routes.SEND_REQUESTS} component={SendRequestScreen} />
    </Stack.Navigator>
  );
}

export default DashboardNavigator;
