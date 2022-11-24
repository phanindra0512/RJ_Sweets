import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import RJInput from "../../components/RJInput/RJInput.ui.tsx";
import RJButton from "../../components/RJButton/RJButton.ui.tsx";

const MobileNumber = ({ navigation }) => {
  const [isName, setIsName] = useState("");
  const onChangeEvent = (text) => {
    setIsName(text);
    console.log(text);
  };
  const onPressEvent = () => {
    console.log("Button clicked");
  };
  return (
    <View style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
      <Text style={{ fontSize: 25, fontFamily: "JosefinSans" }}>
        phanindra MobileNumber
      </Text>
      <Button title="click" onPress={() => navigation.navigate("OTP")} />
      <RJInput
        placeholder={"Mobile Number"}
        value={isName}
        onChangeText={onChangeEvent}
      />

      <RJButton title={"SUBMIT"} onPressEvent={onPressEvent} disabled={false} />
    </View>
  );
};

export default MobileNumber;
