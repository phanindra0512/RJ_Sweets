import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./RJInput.styles";
import COLOR from "../../assets/utils/Color";

type RJInputProps = {
  style?: any;
  placeholder?: string;
  title?: string;
  onChangeText?: (text: string) => void;
  keyboardType: string;
};

const RJInput = (props) => {
  return (
    <View>
      <TextInput
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        style={[styles.input, props.style]}
        keyboardType={props.keyboardType}
        maxLength={props.maxLength}
        editable={props.editable}
        placeholderTextColor={"#CCC"}
      />
    </View>
  );
};

export default RJInput;
