import React from "react";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialIcons } from "@expo/vector-icons";

import routes from "./routes";
import bgColor from "../config/bgColor";
import textColor from "../config/textColor";
import header from "../styles/header";

import ProfileScreen from "../screens/ProfileScreen";
import PostDetailScreen from "../screens/PostDetailScreen";
import TouchableIcon from "../components/TouchableIcon";

const Stack = createStackNavigator();

function ProfileNavigator() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      initialRouteName={routes.PROFILE}
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
        name={routes.PROFILE}
        component={ProfileScreen}
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
      <Stack.Screen
        name={routes.POST_DETAILS}
        component={PostDetailScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  );
}

export default ProfileNavigator;
