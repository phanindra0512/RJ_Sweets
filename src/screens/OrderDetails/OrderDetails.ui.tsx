import { View, Text, ScrollView } from "react-native";
import React from "react";
import styles from "./OrderDetails.styles.ts";
import { Header, RJSquareButton, VerticalLine } from "../../components";
import COLOR from "../../assets/utils/Color";

const OrderDetails = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const orderItems = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          // backgroundColor: "red",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          paddingTop: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <RJSquareButton />
          <View style={{ paddingLeft: 15 }}>
            <Text style={styles.prodName}>Chekodi</Text>
            <Text style={styles.subText}>Small</Text>
            <Text style={[styles.prodName, { color: COLOR.dullBlack }]}>
              10 x {"\u20B9"} 100
            </Text>
          </View>
        </View>
        <Text
          style={[
            styles.prodName,
            { alignSelf: "flex-end", color: COLOR.dullBlack },
          ]}
        >
          {"\u20B9"} 1000
        </Text>
      </View>
    );
  };

  const amountContainer = () => {
    return (
      <View>
        <View style={[styles.costContainer, { paddingTop: 0 }]}>
          <Text style={styles.prodName}>Item Total</Text>
          <Text style={styles.prodName}>{"\u20B9"} 1500</Text>
        </View>
        <View style={[styles.costContainer, { paddingVertical: 0 }]}>
          <Text style={[styles.subText, { color: COLOR.dullBlack }]}>
            Delivery fee
          </Text>
          <Text style={[styles.subText, { color: COLOR.dullBlack }]}>
            {"\u20B9"} 100
          </Text>
        </View>
        <VerticalLine />

        <View style={styles.costContainer}>
          <Text style={[styles.prodName, { fontSize: 17 }]}>Total Payable</Text>
          <Text style={[styles.prodName, { fontSize: 17 }]}>
            {"\u20B9"} 1600
          </Text>
        </View>
      </View>
    );
  };

  const orderDetails = () => {
    return (
      <View>
        <View style={{ paddingTop: 15 }}>
          <Text style={styles.ordertitle}>Order Number</Text>
          <Text style={styles.orderContent}>#123456789</Text>
        </View>

        <View style={{ paddingTop: 15 }}>
          <Text style={styles.ordertitle}>Payment</Text>
          <Text style={styles.orderContent}>PAID : UPI PAY</Text>
        </View>

        <View style={{ paddingTop: 15 }}>
          <Text style={styles.ordertitle}>Date</Text>
          <Text style={styles.orderContent}>22 aug 2022, 5:20 PM</Text>
        </View>

        <View style={{ paddingTop: 15 }}>
          <Text style={styles.ordertitle}>Delivery to</Text>
          <Text numberOfLines={2} style={styles.orderContent}>
            23b-7-21,Vasa vari street,opp.thrinath fashions,upstair DTDC courier
            service,RRPeta,Eluru
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <Header
        leftIcon="arrow-back"
        headerTitle="Order Detail"
        handleBack={navigateBack}
      />
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingRight: 15,
            paddingVertical: 5,
          }}
        >
          <Text style={styles.heading}>Your Order</Text>
          <View
            style={[
              styles.statusContainer,
              {
                backgroundColor: COLOR.green,
              },
            ]}
          >
            <Text style={styles.status}>Delivered</Text>
          </View>
        </View>

        <View style={styles.itemsCard}>
          {orderItems()}
          {orderItems()}
          <VerticalLine />
          {amountContainer()}
        </View>
        <Text style={styles.heading}>Order Details</Text>

        <View style={[styles.itemsCard, { paddingLeft: 10 }]}>
          {orderDetails()}
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderDetails;
