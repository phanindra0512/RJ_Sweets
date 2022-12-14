import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Dashboard, Bottom2, Bottom3, Analytics } from "../screens";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { BottomTabBar } from "../components";
import { StyleSheet } from "react-native";
import COLOR from "../assets/utils/Color.ts";

const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLOR.black,
        tabBarInactiveTintColor: COLOR.darkGray,
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;
          if (route.name === "Dashboard") {
            iconName = focused ? "home" : "home-outline";
          }
          if (route.name === "Bottom2") {
            iconName = focused ? "forum" : "forum-outline";
          }
          if (route.name === "Bottom3") {
            iconName = focused ? "face-man" : "face-man-outline";
          }
          if (route.name === "Analytics") {
            iconName = focused ? "chart-bar" : "chart-waterfall";
          }
          return (
            <MaterialCommunityIcons name={iconName} color={color} size={27} />
          );
        },
      })}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarButton: (props) => <BottomTabBar {...props} />,
        }}
      />
      <Tab.Screen
        name="Bottom2"
        component={Bottom2}
        options={{
          tabBarButton: (props) => <BottomTabBar {...props} />,
        }}
      />
      <Tab.Screen
        name="Bottom3"
        component={Bottom3}
        options={{
          tabBarButton: (props) => <BottomTabBar {...props} />,
        }}
      />
      <Tab.Screen
        name="Analytics"
        component={Analytics}
        options={{
          tabBarButton: (props) => <BottomTabBar {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "transparent",
    elevation: 0,
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    // borderTopWidth: 1,
  },
});
