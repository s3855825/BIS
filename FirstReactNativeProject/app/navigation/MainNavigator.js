import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DashboardNavigator from './DashboardNavigator';
import NotificationScreen from '../screens/NotificationScreen';
import GroupNavigator from './GroupNavigator';
import SettingsNavigator from './SettingsNavigator';
import ProfileNavigator from './ProfileNavigator';

const Drawer = createDrawerNavigator();

function MainNavigator() {
  return (
    <Drawer.Navigator initialRouteName='Dashboard' screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Dashboard" component={DashboardNavigator} />
      <Drawer.Screen name="Notification" component={NotificationScreen} />
      <Drawer.Screen name="Groups" component={GroupNavigator} />
      <Drawer.Screen name="Profile" component={ProfileNavigator} />
      <Drawer.Screen name="Settings" component={SettingsNavigator} />
    </Drawer.Navigator>
  );
}

export default MainNavigator;