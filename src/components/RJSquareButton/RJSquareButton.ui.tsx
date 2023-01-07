import { View, Text } from "react-native";
import React from "react";
import styles from "./RJSquareButton.styles.ts";

const RJSquareButton = () => {
  return (
    <View style={styles.outerCircle}>
      <View style={styles.innerCircle} />
    </View>
  );
};

export default RJSquareButton;
