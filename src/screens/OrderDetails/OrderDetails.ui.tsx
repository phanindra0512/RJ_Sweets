import { View, Text } from "react-native";
import React from "react";
import styles from "./OrderDetails.styles.ts";
import { Header } from "../../components";

const OrderDetails = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };
  return (
    <View style={{ flex: 1 }}>
      <Header
        leftIcon="arrow-back"
        headerTitle="Order Detail"
        handleBack={navigateBack}
      />
      <Text>OrderDetails</Text>
    </View>
  );
};

export default OrderDetails;
