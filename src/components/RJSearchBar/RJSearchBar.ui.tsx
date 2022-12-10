import { View, Text, TextInput } from "react-native";
import React from "react";
import styles from "./RJSearchBar.styles.ts";
import COLOR from "../../assets/utils/Color.ts";
import Ionicons from "react-native-vector-icons/Ionicons";

const RJSearchBar = (props) => {
  return (
    <View>
      <View style={styles.searchComponent}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            name={"search"}
            size={23}
            color={"#ccc"}
            style={{ marginRight: 5 }}
          />
          <TextInput
            placeholder={"Search for items..."}
            value={props.value}
            onChangeText={(text) => props.onChangeValue(text)}
            onSubmitEditing={(text) => props.onValueSubmit(text)}
            placeholderTextColor={"#5D6D7E"}
            style={styles.inputStyles}
          />
        </View>

        {props.value && (
          <Ionicons
            name={"close"}
            size={23}
            color={COLOR.headings}
            style={{ marginRight: 5 }}
            onPress={() => props.onChangeValue("")}
          />
        )}
      </View>
    </View>
  );
};

export default RJSearchBar;
