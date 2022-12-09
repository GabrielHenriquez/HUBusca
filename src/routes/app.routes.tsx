import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Result from "../pages/Result";
import Profile from "../pages/Profile";
import Historic from "../pages/Historic";

const Stack = createNativeStackNavigator()

export default function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Result"
        component={Result}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false
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

