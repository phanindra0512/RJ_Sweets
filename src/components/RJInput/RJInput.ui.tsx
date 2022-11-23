import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./RJInput.styles";
type RJInputProps = {
  style?: any;
  placeholder?: string;
  title?: string;
  onChangeText?: (text: string) => void;
  keyboardType: string;
};

const RJInput = <RJInputProps>(props) => {
  return (
    <View>
      <Text>Text input component</Text>
      <TextInput
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        style={styles.input}
        placeholderTextColor={"#A8A8A8"}
        placeholderStyle={{ fontFamily: "montserrat_semibold" }}
      />
    </View>
  );
};

export default RJInput;
