import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PostDetailScreen from '../screens/PostDetailScreen';
import RequestDetailScreen from '../screens/RequestDetailScreen';

const Stack = createStackNavigator();

function RequestNavigator() {
  return (
    <Stack.Navigator initialRouteName='PostDetails'>
      <Stack.Screen name="PostDetails" component={PostDetailScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="RequestDetails" component={RequestDetailScreen} />
    </Stack.Navigator>
  );
}

export default RequestNavigator;