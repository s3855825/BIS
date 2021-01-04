import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from '../screens/ProfileScreen';
// import AuthNavigator from './AuthNavigator';

const Stack = createStackNavigator();

function ProfileNavigator() {
  return (
    <Stack.Navigator initialRouteName='Profile'>
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}/>
      {/* <Stack.Screen name="AuthNav" component={AuthNavigator} /> */}
    </Stack.Navigator>
  );
}

export default ProfileNavigator;