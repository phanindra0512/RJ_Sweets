import React from "react";
import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import styles from "./Dashboard.styles.ts";
import COLOR from "../../assets/utils/Color";
import STRINGS from "./Dashboard.strings.ts";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  DashboardOrderStatus,
  myServices,
} from "../../constants/DashboardOrderStatus.constants.ts";

const Dashboard = ({ navigation }) => {
  const headerContainer = () => {
    return (
      <View style={styles.headerBlock}>
        <View>
          <Text style={[styles.subHeading, { color: COLOR.whiteDull }]}>
            {STRINGS.GOOD_MORNING}
          </Text>
          <Text style={[styles.heading, { color: COLOR.white }]}>
            {STRINGS.USER_NAME}
          </Text>
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
            <View
              key={index}
              style={[
                styles.orderCountBlock,
                { borderRightWidth: order.id == 3 ? 0 : 1.5 },
              ]}
            >
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

  const ourServices = () => {
    return (
      <View style={styles.servicesContainer}>
        <Text style={styles.servicesHeading}>{STRINGS.OUR_SERVICES}</Text>
        <View style={{ flexDirection: "row" }}>
          {myServices.map((serviceItem) => {
            return (
              <View key={serviceItem.id} style={styles.servicesBlock}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={styles.cardContainer}
                  onPress={() => handleServiceNavigation(serviceItem.title)}
                >
                  <Image
                    source={serviceItem.image}
                    style={{ width: 45, height: 45 }}
                  />
                </TouchableOpacity>
                <Text style={styles.servicesTitle}>{serviceItem.title}</Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  };

  const handleServiceNavigation = (title) => {
    if (title === STRINGS.CREATE_ORDER) {
      navigation.navigate("CreateOrder");
    } else if (title === STRINGS.VIEW_ORDERS) {
      navigation.navigate("ViewOrders");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        {headerContainer()}
        {orderStatusContainer()}
      </View>
      {ourServices()}
    </View>
  );
};

export default Dashboard;
