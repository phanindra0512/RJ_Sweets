import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const BottomTabBar = (props) => {
  const { children, onPress, accessibilityState } = props;

  if (accessibilityState.selected) {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{ flex: 1, backgroundColor: "white" }}
      >
        {children}
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{ flex: 1, backgroundColor: "white" }}
      >
        {children}
      </TouchableOpacity>
    );
  }
};

export default BottomTabBar;
