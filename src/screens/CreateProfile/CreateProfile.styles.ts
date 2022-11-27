import { StyleSheet, Dimensions } from "react-native";
import COLOR from "../../assets/utils/Color";

const ScreenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  contentBlock: {
    height: ScreenHeight - 150,
    backgroundColor: COLOR.white,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  Heading: {
    fontSize: 25,
    fontFamily: "Ubuntu-Bold",
    color: COLOR.white,
  },
  subHeading: {
    fontSize: 13,
    fontFamily: "Ubuntu-Medium",
    color: COLOR.buttonText,
  },
  button: {
    borderRadius: 7,
    backgroundColor: COLOR.buttonSolid,
  },
});
export default styles;
