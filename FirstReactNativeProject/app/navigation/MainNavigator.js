import React, { useContext } from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Alert } from "react-native";

import DashboardNavigator from "./DashboardNavigator";
import GroupNavigator from "./GroupNavigator";
import SettingsNavigator from "./SettingsNavigator";
import ProfileNavigator from "./ProfileNavigator";
import AuthContext from "../auth/context";
import InboxNavigator from "./InboxNavigator";
import OutboxNavigator from "./OutboxNavigator";
import routes from "./routes";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const { setUser } = useContext(AuthContext);

  const handlePress = () => setUser(null);

  const showConfirmation = () => {
    Alert.alert(
      "Log out",
      "Are you sure?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "OK", onPress: handlePress },
      ],
      { onDismiss: () => {} }
    );
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Log out" onPress={showConfirmation} />
    </DrawerContentScrollView>
  );
}

function MainNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName={routes.DASHBOARD}
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name={routes.DASHBOARD} component={DashboardNavigator} />
      <Drawer.Screen name={routes.GROUPS} component={GroupNavigator} />
      <Drawer.Screen name={routes.INBOX} component={InboxNavigator} />
      <Drawer.Screen name={routes.OUTBOX} component={OutboxNavigator} />
      <Drawer.Screen name={routes.PROFILE} component={ProfileNavigator} />
      <Drawer.Screen name={routes.SETTINGS} component={SettingsNavigator} />
    </Drawer.Navigator>
  );
}

export default MainNavigator;
