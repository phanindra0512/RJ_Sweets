import { StyleSheet, Dimensions } from "react-native";
import COLOR from "../../assets/utils/Color";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  button: {
    height: 45,
    width: windowWidth - 50,
    borderRadius: 5,
    backgroundColor: COLOR.buttonSolid,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    color: COLOR.white,
    fontFamily: "Ubuntu-Medium",
  },
});
export default styles;
