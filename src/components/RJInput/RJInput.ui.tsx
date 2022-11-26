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

const RJInput = <RJInputProps>(props) => {
  return (
    <View>
      <TextInput
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        style={styles.input}
        placeholderTextColor={COLOR.headings}
        keyboardType={props.keyboardType}
        maxLength={props.maxLength}
      />
    </View>
  );
};

export default RJInput;
