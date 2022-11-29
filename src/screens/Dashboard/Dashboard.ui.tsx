import React from "react";
import { View, Text, Dimensions, Image } from "react-native";
import styles from "./Dashboard.styles.ts";
import COLOR from "../../assets/utils/Color";
import STRINGS from "./Dashboard.strings.ts";
import Ionicons from "react-native-vector-icons/Ionicons";
import { DashboardOrderStatus } from "../../constants/DashboardOrderStatus.constants.ts";

const Dashboard = () => {
  const headerContainer = () => {
    return (
      <View style={styles.headerBlock}>
        <View>
          <Text style={styles.subHeading}>{STRINGS.GOOD_MORNING}</Text>
          <Text style={styles.heading}>{STRINGS.USER_NAME}</Text>
        </View>

        <View>
          <Image
            source={require("../../assets/images/profilePic.jpg")}
            style={{ width: 60, height: 60, borderRadius: 50 }}
          />
        </View>
      </View>
    );
  };

  const orderStatusContainer = () => {
    return (
      <View style={styles.ordersBlock}>
        {DashboardOrderStatus?.map((order, index) => {
          return (
            <View key={index} style={styles.orderCountBlock}>
              <View style={{ flexDirection: "row" }}>
                <Ionicons
                  name={order.iconName}
                  size={20}
                  style={{ marginTop: 4 }}
                  color={COLOR.headings}
                />
                <View style={{ marginLeft: 6 }}>
                  <Text style={[styles.heading, { color: COLOR.buttonSolid }]}>
                    {order.orderCount}
                  </Text>
                  <Text style={styles.subHeading}>{order.orderTitle}</Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        {headerContainer()}
        {orderStatusContainer()}
      </View>
    </View>
  );
};

export default Dashboard;
