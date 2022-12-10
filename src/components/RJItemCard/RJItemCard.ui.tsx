import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./RJItemCard.styles.ts";
import COLOR from "../../assets/utils/Color.ts";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const RJItemCard = (props) => {
  const { data } = props;
  const [isAdd, setIsAdd] = useState(false);

  const [isCount, setIsCount] = useState(1);

  const addButtonHandler = () => {
    setIsAdd(true);
  };

  const incrementCount = () => {
    setIsCount(isCount + 1);
  };

  const decrementCount = () => {
    if (isCount > 1) {
      setIsCount(isCount - 1);
    } else {
      setIsAdd(false);
    }
  };

  const addButton = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={addButtonHandler}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonTitle}>ADD</Text>
      </TouchableOpacity>
    );
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
    <View key={data.id} style={styles.cardContainer}>
      <Image source={data.productImage} style={styles.image} />
      <View style={{ flex: 1.5, paddingLeft: 10 }}>
        <Text style={styles.prodName}>{data.productName}</Text>
        <Text style={styles.prodPrice}>
          {"\u20B9"} {data.productPrice}
        </Text>
        <Text numberOfLines={2} style={styles.description}>
          {data.productDescription}
        </Text>
      </View>
      <View style={styles.counterBlock}>{isAdd ? counter() : addButton()}</View>
    </View>
  );
};

export default RJItemCard;
