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
import styles from "./OTP.styles.ts";
import RJInput from "../../components/RJInput/RJInput.ui.tsx";
import RJButton from "../../components/RJButton/RJButton.ui.tsx";
import STRINGS from "./OTP.strings.ts";
import COLOR from "../../assets/utils/Color";

const ScreenHeight = Dimensions.get("window").height;

const OTP = () => {
  const [isOtp, setIsOtp] = useState("");
  const onChangeEvent = (text) => {
    setIsOtp(text);
    console.log(text);
  };
  const onPressEvent = () => {
    console.log("Button clicked");
    // navigation.navigate("OTP");
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <ScrollView>
        <View style={{ height: ScreenHeight }}>
          <View style={styles.contentBlock}>
            <Image
              source={require("../../assets/images/otp.png")}
              style={{ width: 250, height: 250 }}
            />
            <Text style={styles.heading}>{STRINGS.OTP_VERIFICATION}</Text>
            <Text style={styles.subHeading}>{STRINGS.OTP_VERIFY_TEXT}</Text>
          </View>
          <View style={styles.inputBlock}>
            <RJInput
              placeholder={STRINGS.PLACEHOLDER_TEXT}
              value={isOtp}
              onChangeText={onChangeEvent}
              keyboardType={"number-pad"}
              maxLength={4}
            />
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Text style={styles.subHeading}>{STRINGS.DIDNT_RECEIVE_OTP}</Text>
              <Text
                onPress={() => console.log("phani")}
                style={[styles.subHeading, { color: COLOR.buttonSolid }]}
              >
                {STRINGS.RESEND}
              </Text>
            </View>

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

export default OTP;
