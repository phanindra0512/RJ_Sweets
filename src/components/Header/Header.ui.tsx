import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import COLOR from "../../assets/utils/Color.ts";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from "./Header.styles.ts";

const Header = (props) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.contentBlock}>
        <Ionicons
          name={props.leftIcon}
          size={26}
          color={COLOR.black}
          style={{ paddingTop: 4 }}
          onPress={props.handleBack}
        />
        <Text style={styles.headerTitle}>{props.headerTitle}</Text>
      </View>

      {props.badgeCount && (
        <TouchableOpacity
          onPress={props.handleCartNavigation}
          style={{ justifyContent: "center", marginRight: 25 }}
        >
          <AntDesign name={props.rightIcon} size={26} color={COLOR.black} />

          <View style={styles.badgeContainer}>
            <Text style={styles.badgeCount}>{props.badgeCount}</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
