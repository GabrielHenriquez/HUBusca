import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../pages/Home";
import { Result } from "../pages/Result";
import { Profile } from "../pages/Profile";
import { Historic } from "../pages/Historic";

const Stack = createNativeStackNavigator();
// Types
export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Historic: undefined;
  Result: undefined;
};

export default function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Result"
        component={Result}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Historic"
        component={Historic}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
