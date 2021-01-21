import React, { useEffect, useState } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import bgColor from "./app/config/bgColor";
import authStorage from "./app/auth/storage";

import AuthNavigator from "./app/navigation/AuthNavigator";
import TeaContext from "./app/auth/context";
import MainNavigator from "./app/navigation/MainNavigator";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: bgColor.main,
    border: "rgb(0, 0, 0)",
  },
};

function App() {
  const [user, setUser] = useState();

  const restoreUser = async () => {
    const userSt = await authStorage.getUser();
    if (!userSt) return;
    let userObj = JSON.parse(userSt);
    setUser(userObj);
  };

  useEffect(() => {
    restoreUser();
  }, []);

  return (
    <TeaContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={MyTheme}>
        {user ? <MainNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </TeaContext.Provider>
  );
}

export default App;
