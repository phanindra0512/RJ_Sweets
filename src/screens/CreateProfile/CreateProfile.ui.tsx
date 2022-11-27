import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "./CreateProfile.styles.ts";
import COLOR from "../../assets/utils/Color";
import STRINGS from "./CreateProfile.strings.ts";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import RJButton from "../../components/RJButton/RJButton.ui.tsx";
import RJInput from "../../components/RJInput/RJInput.ui.tsx";

const ScreenHeight = Dimensions.get("window").height;

const CreateProfile = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <ScrollView>
        <View
          style={{ height: ScreenHeight, backgroundColor: COLOR.buttonSolid }}
        >
          {createProfileBlock()}
          <View style={styles.contentBlock}>
            {profileImageBlock()}
            {profileForm()}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const createProfileBlock = () => {
  return (
    <View style={{ paddingTop: 50, paddingLeft: 15 }}>
      <Text style={styles.Heading}>{STRINGS.CREATE_PROFILE}</Text>
      <Text style={styles.subHeading}>{STRINGS.DESCRIPTION}</Text>
    </View>
  );
};

const profileImageBlock = () => {
  return (
    <View style={{ width: 80, alignSelf: "center", marginTop: 30 }}>
      <Image
        source={require("../../assets/images/profilePic.jpg")}
        style={{ width: 80, height: 80, borderRadius: 50 }}
      />
      <TouchableOpacity style={{ position: "absolute", top: 0, right: -10 }}>
        <MaterialIcons name="edit" color={COLOR.buttonSolid} size={35} />
      </TouchableOpacity>
    </View>
  );
};

const profileForm = () => {
  const [isUserName, setIsUserName] = useState("");
  const [isEmailId, setIsEmailId] = useState("");
  const [isMobile, setIsMobile] = useState("");
  const [isStoreName, setIsStoreName] = useState("");
  const [isStoreAddress, setIsStoreAddress] = useState("");

  const onChangeName = (text) => {
    setIsUserName(text);
    console.log(text);
  };
  const onChangeEmail = (text) => {
    setIsEmailId(text);
    console.log(text);
  };

  const onChangeMobile = (text) => {
    setIsMobile(text);
    console.log(text);
  };
  const onChangeStoreName = (text) => {
    setIsStoreName(text);
    console.log(text);
  };
  const onChangeStoreAddress = (text) => {
    setIsStoreAddress(text);
    console.log(text);
  };

  const onPressEvent = () => {
    console.log("Button clicked");
    // navigation.navigate("CreateProfile");
  };
  return (
    <View style={{ alignItems: "center", marginTop: 20 }}>
      <RJInput
        placeholder={STRINGS.OWNER_NAME}
        value={isUserName}
        onChangeText={onChangeName}
        keyboardType={"default"}
        style={{ marginBottom: 30 }}
      />

      <RJInput
        placeholder={STRINGS.EMAIL_ID}
        value={isEmailId}
        onChangeText={onChangeEmail}
        keyboardType={"email-address"}
        style={{ marginBottom: 30 }}
      />

      <RJInput
        placeholder={STRINGS.MOBILE_NUMBER}
        value={isMobile}
        onChangeText={onChangeMobile}
        keyboardType={"default"}
        style={{ marginBottom: 30 }}
        editable={false}
      />

      <RJInput
        placeholder={STRINGS.STORE_NAME}
        value={isStoreName}
        onChangeText={onChangeStoreName}
        keyboardType={"default"}
        style={{ marginBottom: 30 }}
      />

      <RJInput
        placeholder={STRINGS.STORE_ADDRESS}
        value={isStoreAddress}
        onChangeText={onChangeStoreAddress}
        keyboardType={"default"}
        style={{ marginBottom: 30 }}
      />

      <RJButton
        title={STRINGS.BUTTON_TITLE}
        onPressEvent={onPressEvent}
        disabled={false}
        style={styles.button}
      />
    </View>
  );
};

export default CreateProfile;
