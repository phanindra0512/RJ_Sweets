import React from "react";
import { View, Text, Button } from "react-native";

const MobileNumber = ({navigation}) => {
  return (
    <View>
      <Text> phanindra MobileNumber</Text>
      <Button title="click" onPress={() => navigation.navigate('OTP')} />
    </View>
  );
};

export default MobileNumber;
