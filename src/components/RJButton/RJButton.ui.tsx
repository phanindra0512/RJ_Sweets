import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./RJButton.styles";

const RJButton = (props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={props.onPressEvent}
      disabled={props.disabled}
    >
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default RJButton;
