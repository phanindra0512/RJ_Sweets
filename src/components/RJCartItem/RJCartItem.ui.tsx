import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./RJCartItem.styles.ts";
import COLOR from "../../assets/utils/Color.ts";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { RJSquareButton } from "../../components";

const RJCartItem = (props) => {
  const { data } = props;

  const [isCount, setIsCount] = useState(1);

  const incrementCount = () => {
    setIsCount(isCount + 1);
  };

  const decrementCount = () => {
    if (isCount > 1) {
      setIsCount(isCount - 1);
    }
  };
  const counter = () => {
    return (
      <View style={styles.counterContainer}>
        <TouchableOpacity onPress={decrementCount} style={styles.countBlock}>
          <MaterialCommunityIcons name="minus" size={22} color="white" />
        </TouchableOpacity>
        <View style={[styles.countBlock, { backgroundColor: "white" }]}>
          <Text style={[styles.buttonTitle, { color: COLOR.black }]}>
            {isCount}
          </Text>
        </View>
        <TouchableOpacity onPress={incrementCount} style={styles.countBlock}>
          <MaterialCommunityIcons name="plus" size={22} color={COLOR.white} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View key={data.id} style={styles.itemContainer}>
      <View style={{ paddingTop: 5 }}>
        <RJSquareButton />
      </View>
      <View style={{ flex: 0.9, paddingLeft: 10 }}>
        <Text numberOfLines={2} style={styles.title}>
          {data.productName}
        </Text>
        <Text style={styles.subHeading}>Small</Text>
      </View>
      <View style={{ paddingRight: 10 }}>{counter()}</View>

      <View style={{ paddingTop: 5 }}>
        <Text style={styles.title}>
          {"\u20B9"} {data.productPrice * isCount}
        </Text>
      </View>
    </View>
  );
};

export default RJCartItem;
