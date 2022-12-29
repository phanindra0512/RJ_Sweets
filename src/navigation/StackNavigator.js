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
  Payment,
  SuccessScreen,
} from "../screens";
import BottomNavigation from "./BottomNavigation";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
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
        component={BottomNavigation}
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
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SuccessScreen"
        component={SuccessScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
