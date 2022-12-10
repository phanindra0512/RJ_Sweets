import { View, Text } from "react-native";
import React from "react";
import styles from "./MyCart.styles.ts";
import { Header } from "../../components";

const MyCart = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1 }}>
      <Header
        leftIcon="arrow-back"
        headerTitle="Cart"
        handleBack={navigateBack}
      />
      <Text>MyCart</Text>
    </View>
  );
};

export default MyCart;
