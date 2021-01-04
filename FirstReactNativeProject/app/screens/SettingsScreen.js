import React, { useContext } from "react";
import { Text } from "react-native";

import TestScreen from "./TestScreen";
import ModButton from "../components/ModButton";
import AuthContext from "../auth/context";

function SettingsScreen({ navigation }) {
  const { setUser } = useContext(AuthContext);
  // const userDeletion = async () => {
  //     const response = await authApi.deleteUser(id);
  //     if (!response.ok) {
  //         console.log('failed');
  //         return;
  //     }
  //     console.log('success')
  //     navigation.navigate('AuthNav')
  // }

  return (
    <TestScreen>
      <Text>Settings</Text>
      <ModButton title="About" onPress={() => navigation.navigate("About")} />
      <ModButton title="Log out" onPress={() => setUser(null)} />
    </TestScreen>
  );
}

export default SettingsScreen;
