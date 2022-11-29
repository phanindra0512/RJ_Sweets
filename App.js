import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MobileNumber from "./src/screens/MobileNumber/MobileNumber.ui";
import OTP from "./src/screens/OTP/OTP.ui";
import CreateProfile from "./src/screens/CreateProfile/CreateProfile.ui";
import Dashboard from "./src/screens/Dashboard/Dashboard.ui.tsx";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MobileNumber"
          component={MobileNumber}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OTP"
          component={OTP}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateProfile"
          component={CreateProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
