import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import GroupListScreen from '../screens/GroupListScreen';
import GroupChatScreen from '../screens/GroupChatScreen';
import GroupDetailScreen from '../screens/GroupDetailScreen';

const Stack = createStackNavigator();

function GroupNavigator() {
  return (
    <Stack.Navigator initialRouteName='GroupList'>
      <Stack.Screen name="GroupList" component={GroupListScreen} options={{ headerShown: false }} />
      <Stack.Screen name="GroupDetails" component={GroupDetailScreen} />
    </Stack.Navigator>
  );
}

export default GroupNavigator;