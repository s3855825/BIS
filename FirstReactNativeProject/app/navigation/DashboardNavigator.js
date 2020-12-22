import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DashboardScreen from '../screens/DashboardScreen';
import PostDetailScreen from '../screens/PostDetailScreen';
import CreatePostScreen from '../screens/CreatePostScreen';

const Stack = createStackNavigator();

function DashboardNavigator() {
  return (
    <Stack.Navigator initialRouteName='Dashboard'>
      <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="PostDetails" component={PostDetailScreen} />
      <Stack.Screen name="CreatePosts" component={CreatePostScreen} />
    </Stack.Navigator>
  );
}

export default DashboardNavigator;