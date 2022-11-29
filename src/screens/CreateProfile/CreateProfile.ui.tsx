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

const CreateProfile = ({ navigation }) => {
  const [isUserData, setUserData] = useState({
    ownerName: "",
    emailId: "",
    mobileNumber: "",
    storeName: "",
    storeAddress: "",
  });

  const handleOnChange = (text, input) => {
    setUserData((prevState) => ({ ...prevState, [input]: text }));
  };
  const onPressEvent = () => {
    console.log("Button clicked", isUserData);
    navigation.navigate("Dashboard");
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
    return (
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <RJInput
          placeholder={STRINGS.OWNER_NAME}
          value={isUserData.ownerName}
          onChangeText={(text) => handleOnChange(text, "ownerName")}
          keyboardType={"default"}
          style={{ marginBottom: 30 }}
        />

        <RJInput
          placeholder={STRINGS.EMAIL_ID}
          value={isUserData.emailId}
          onChangeText={(text) => handleOnChange(text, "emailId")}
          keyboardType={"email-address"}
          style={{ marginBottom: 30 }}
        />

        <RJInput
          placeholder={STRINGS.MOBILE_NUMBER}
          value={isUserData.mobileNumber}
          onChangeText={(text) => handleOnChange(text, "mobileNumber")}
          keyboardType={"default"}
          style={{ marginBottom: 30 }}
          editable={false}
        />

        <RJInput
          placeholder={STRINGS.STORE_NAME}
          value={isUserData.storeName}
          onChangeText={(text) => handleOnChange(text, "storeName")}
          keyboardType={"default"}
          style={{ marginBottom: 30 }}
        />

        <RJInput
          placeholder={STRINGS.STORE_ADDRESS}
          value={isUserData.storeAddress}
          onChangeText={(text) => handleOnChange(text, "storeAddress")}
          keyboardType={"default"}
          style={{ marginBottom: 30 }}
        />
      </View>
    );
  };

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

export default CreateProfile;
