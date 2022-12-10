import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  CreateProfile,
  Dashboard,
  CreateOrder,
  ViewOrders,
  OTP,
  MobileNumber,
  MyCart,
  OrderDetails,
} from "./src/screens";

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

        <Stack.Screen
          name="CreateOrder"
          component={CreateOrder}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ViewOrders"
          component={ViewOrders}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="MyCart"
          component={MyCart}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OrderDetails"
          component={OrderDetails}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
