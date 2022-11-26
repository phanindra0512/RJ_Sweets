import { StyleSheet, Dimensions } from "react-native";
import COLOR from "../../assets/utils/Color";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  button: {
    height: 45,
    width: windowWidth - 50,
    borderRadius: 5,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: COLOR.white,
    fontFamily: "Ubuntu-Bold",
  },
});
export default styles;
