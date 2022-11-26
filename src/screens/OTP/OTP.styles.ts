import { StyleSheet } from "react-native";
import COLOR from "../../assets/utils/Color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  contentBlock: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 25,
    fontFamily: "Ubuntu-Bold",
    color: COLOR.headings,
  },
  subHeading: {
    fontSize: 15,
    fontFamily: "Ubuntu-Medium",
    paddingTop: 7,
  },
  inputBlock: {
    flex: 1,
    // backgroundColor: "pink",
    alignItems: "center",
  },
  button: {
    marginTop: 30,
    borderRadius: 7,
    backgroundColor: COLOR.buttonSolid,
  },
});
export default styles;
