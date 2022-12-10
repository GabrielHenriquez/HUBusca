import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import UserProvider from "./src/contexts/UserContext";

import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <UserProvider>
        <StatusBar
          backgroundColor="#242937"
          translucent={false}
        />
        <Routes />
      </UserProvider>
    </NavigationContainer>
  );
}
