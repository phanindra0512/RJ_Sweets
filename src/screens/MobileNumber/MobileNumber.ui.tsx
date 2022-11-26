import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
} from "react-native";
import styles from "./MobileNumber.styles.ts";
import RJInput from "../../components/RJInput/RJInput.ui.tsx";
import RJButton from "../../components/RJButton/RJButton.ui.tsx";
import STRINGS from "./MobileNumber.strings.ts";

const ScreenHeight = Dimensions.get("window").height;

const MobileNumber = ({ navigation }) => {
  const [isName, setIsName] = useState("");
  const onChangeEvent = (text) => {
    setIsName(text);
    console.log(text);
  };
  const onPressEvent = () => {
    console.log("Button clicked");
    navigation.navigate("OTP");
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <ScrollView>
        <View style={{ height: ScreenHeight }}>
          <View style={styles.contentBlock}>
            <Image
              source={require("../../assets/images/verification.png")}
              style={{ width: 250, height: 250, marginBottom: 30 }}
            />
            <Text style={styles.heading}>{STRINGS.ENTER_MOBILE_NUMBER}</Text>
            <Text style={styles.subHeading}>{STRINGS.CODE_VERIFY_TEXT}</Text>
          </View>
          <View style={styles.inputBlock}>
            <RJInput
              placeholder={STRINGS.PLACE_HOLDER_TEXT}
              value={isName}
              onChangeText={onChangeEvent}
              keyboardType={"number-pad"}
              maxLength={10}
            />

            <RJButton
              title={STRINGS.BUTTON_TITLE}
              onPressEvent={onPressEvent}
              disabled={false}
              style={styles.button}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default MobileNumber;
