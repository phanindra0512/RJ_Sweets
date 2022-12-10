import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import styles from "./CreateOrder.styles.ts";
import COLOR from "../../assets/utils/Color";
import STRINGS from "./Dashboard.strings.ts";
import { myProducts } from "../../constants/CreateOrder.constants.ts";
import AntDesign from "react-native-vector-icons/AntDesign";
import {
  Header,
  RJSearchBar,
  RJItemCard,
  VerticalLine,
} from "../../components";

const CreateOrder = ({ navigation }) => {
  const [isSearchItem, setIsSearchItem] = useState("");

  const cartNavigation = () => {
    navigation.navigate("MyCart");
  };

  const navigateBack = () => {
    navigation.goBack();
  };

  const handleNextNavigation = () => {
    navigation.navigate("MyCart");
  };

  const totalIemsBlock = () => {
    return (
      <View style={styles.bottomContainer}>
        <View style={styles.amountContainer}>
          <Text style={styles.count}>2 ITEMS</Text>
          <Text style={[styles.count, { fontSize: 18 }]}>
            {"\u20B9"}500{" "}
            <Text style={[styles.count, { fontSize: 14 }]}>total</Text>
          </Text>
        </View>

        <TouchableOpacity
          onPress={handleNextNavigation}
          style={styles.nextNavigation}
        >
          <Text style={[styles.count, { fontSize: 18 }]}>Next</Text>
          <AntDesign
            name="caretright"
            size={12}
            color={COLOR.white}
            style={{ paddingTop: 4, paddingLeft: 3 }}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Header
        leftIcon="arrow-back"
        rightIcon="shoppingcart"
        headerTitle="Create Order"
        badgeCount={14}
        handleCartNavigation={cartNavigation}
        handleBack={navigateBack}
      />
      <RJSearchBar
        value={isSearchItem}
        onChangeValue={(text) => setIsSearchItem(text)}
        onValueSubmit={() => alert(isSearchItem)}
      />

      {/* <Text>Search is : {isSearchItem}</Text> */}
      <ScrollView style={{ marginBottom: 50, marginTop: 10 }}>
        {myProducts.map((product, index) => {
          return (
            <View key={index}>
              <RJItemCard data={product} />
              <VerticalLine />
            </View>
          );
        })}
      </ScrollView>

      {totalIemsBlock()}
    </View>
  );
};

export default CreateOrder;
