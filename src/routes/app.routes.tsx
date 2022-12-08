import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home"
import Main from "../pages/Result";
import Profile from "../pages/Profile";
import Historic from "../pages/Historic";

const Stack = createNativeStackNavigator()

export default function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Voltar',
          headerStyle: {
            backgroundColor: '#1d1d2e'
          },
          headerTintColor: '#FFF'
        }}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          title: 'Voltar',
          headerStyle: {
            backgroundColor: '#1d1d2e'
          },
          headerTintColor: '#FFF'
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Voltar',
          headerStyle: {
            backgroundColor: '#1d1d2e'
          },
          headerTintColor: '#FFF'
        }}
      />
      <Stack.Screen
        name="Historic"
        component={Historic}
        options={{
          title: 'Voltar',
          headerStyle: {
            backgroundColor: '#1d1d2e'
          },
          headerTintColor: '#FFF'
        }}
      />
    </Stack.Navigator>
  )
}

