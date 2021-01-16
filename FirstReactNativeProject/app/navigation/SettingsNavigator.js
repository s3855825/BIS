import React from "react";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialIcons } from "@expo/vector-icons";

import routes from "./routes";
import bgColor from "../config/bgColor";
import textColor from "../config/textColor";
import header from "../styles/header";

import SettingsScreen from "../screens/SettingsScreen";
import AboutScreen from "../screens/AboutScreen";
import TouchableIcon from "../components/TouchableIcon";

const Stack = createStackNavigator();

function SettingsNavigator() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      initialRouteName={routes.SETTINGS}
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
        name={routes.SETTINGS}
        component={SettingsScreen}
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
      />
      <Stack.Screen name={routes.ABOUT} component={AboutScreen} />
    </Stack.Navigator>
  );
}

export default SettingsNavigator;
