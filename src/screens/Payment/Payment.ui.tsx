import { View, Text, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Header, RJRadioButton } from "../../components";
import styles from "./Payment.styles.ts";
import COLOR from "../../assets/utils/Color";
import RNUpiPayment from "react-native-upi-pay";

const paymentOptions = [
  {
    id: 1,
    type: "UPI Payment",
  },
  {
    id: 2,
    type: "Cash on Delivery",
  },
];
const Payment = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };
  const [selected, setIsSelected] = useState(false);

  const selectOption = () => {
    setIsSelected(!selected);
  };

  const handleSuccessNavigation = () => {
    navigation.navigate("SuccessScreen");
  };
  const pay = (paymentApp) => {
    console.log("pay", paymentApp);
    RNUpiPayment.initializePayment(
      {
        vpa: "9505876290@apl", // or can be john@ybl or mobileNo@upi
        payeeName: "John Doe",
        amount: "1",
        transactionRef: "aasf-332-aoei-fn",
      },
      failureCallback,
      successCallback,
      paymentApp
    );
  };

  const failureCallback = (data) => {
    console.log("fail");
  };

  const successCallback = (data) => {
    console.log("success");
  };

  const addressContent = () => {
    return (
      <View style={styles.addressBlock}>
        <Text style={styles.addressContent}>
          Deliver to :{" "}
          <Text style={{ fontFamily: "Ubuntu-Medium", color: COLOR.black }}>
            Phanindra nani,
          </Text>
        </Text>
        <Text
          style={[styles.addressContent, { paddingTop: 5, lineHeight: 18 }]}
        >
          23b-7-21,Vasa vari street,opp.thrinath fashions,upstair DTDC courier
          service,RRPeta,Eluru
        </Text>
      </View>
    );
  };

  const totalIemsBlock = () => {
    return (
      <View style={styles.bottomContainer}>
        <View style={styles.amountContainer}>
          <Text style={[styles.count, { fontSize: 18, paddingBottom: 3 }]}>
            {"\u20B9"}1600
          </Text>
          <Text style={styles.count}>View Details</Text>
        </View>

        <TouchableOpacity
          onPress={handleSuccessNavigation}
          style={styles.nextNavigation}
        >
          <Text style={[styles.count, { fontSize: 18, color: COLOR.white }]}>
            Pay Now
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <Header
        leftIcon="arrow-back"
        headerTitle="Payment"
        handleBack={navigateBack}
      />
      {addressContent()}
      <Text style={styles.heading}>Payment Options</Text>

      <View style={styles.itemsCard}>
        {paymentOptions.map((payType) => {
          return (
            <RJRadioButton
              // selectOption={selectOption}
              // selected={selected}
              title={payType.type}
            />
          );
        })}
      </View>
      {totalIemsBlock()}
    </View>
  );
};

export default Payment;
