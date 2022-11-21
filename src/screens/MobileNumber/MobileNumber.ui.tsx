import React from "react";
import { View, Text, Button } from "react-native";
import RJInput from "../../components/RJInput/RJInput.ui.tsx";
const MobileNumber = ({ navigation }) => {
  return (
    <View>
      <Text> phanindra MobileNumber</Text>
      <Button title="click" onPress={() => navigation.navigate("OTP")} />
      <RJInput />
    </View>
  );
};

export default MobileNumber;
