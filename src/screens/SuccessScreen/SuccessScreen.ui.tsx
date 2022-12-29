import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./SuccessScreen.styles.ts";
import COLOR from "../../assets/utils/Color";
import STRINGS from "./Success.strings.ts";
import { VerticalLine, RJButton } from "../../components";

const transactionStatus = {
  id: 1,
  transactionNumber: 123456,
  transactionAmount: 1600,
  transactionType: "UPI PAY",
  transactionDate: "22 aug 2022, 5:20 PM",
};
const SuccessScreen = ({ navigation }) => {
  const onPressEvent = () => {
    navigation.navigate("ViewOrders");
  };

  const successContent = () => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../../assets/images/success.png")}
          style={{ width: 140, height: 140, alignSelf: "center" }}
        />

        <View style={styles.contentContainer}>
          <Text style={styles.success}>{STRINGS.ORDER_PLACED}</Text>
          <Text style={[styles.subContent, { paddingTop: 15 }]}>
            {STRINGS.SUB_TEXT1}
          </Text>
          <Text style={[styles.subContent, { paddingTop: 4 }]}>
            {STRINGS.SUB_TEXT2}
          </Text>
        </View>
      </View>
    );
  };

  const transactionDetails = () => {
    return (
      <View>
        <View style={styles.amountCard}>
          <Text style={styles.transactionContent}>
            {STRINGS.TOTAL_AMOUNT_PAID}
          </Text>
          <Text style={[styles.transactionContent, { color: COLOR.black }]}>
            {transactionStatus.transactionAmount}
          </Text>
        </View>
        <VerticalLine />
        <View style={styles.amountCard}>
          <Text style={styles.transactionContent}>{STRINGS.PAYED_BY}</Text>
          <Text style={[styles.transactionContent, { color: COLOR.black }]}>
            {transactionStatus.transactionType}
          </Text>
        </View>
        <VerticalLine />
        <View style={styles.amountCard}>
          <Text style={styles.transactionContent}>
            {STRINGS.TRANSACTION_DATE}
          </Text>
          <Text style={[styles.transactionContent, { color: COLOR.black }]}>
            {transactionStatus.transactionDate}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      {successContent()}
      <View>
        <VerticalLine />
        <Text
          style={[
            styles.transactionContent,
            { paddingTop: 15, paddingBottom: 30, color: COLOR.buttonSolid },
          ]}
        >
          {STRINGS.TRANSACTION_NUMBER} : {transactionStatus.transactionNumber}
        </Text>
      </View>

      <View style={{ flex: 1 }}>{transactionDetails()}</View>
      <RJButton
        title={STRINGS.VIEW_ORDER}
        style={styles.button}
        onPressEvent={onPressEvent}
      />
    </View>
  );
};

export default SuccessScreen;
