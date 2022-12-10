import { StyleSheet, Dimensions } from "react-native";
import COLOR from "../../assets/utils/Color";

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    backgroundColor: COLOR.white,
    flexDirection: "row",
    elevation: 5,
    justifyContent: "space-between",
  },
  contentBlock: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
  },
  headerTitle: {
    fontSize: 19,
    fontFamily: "Ubuntu-Medium",
    paddingLeft: 20,
    color: COLOR.black,
  },
  badgeContainer: {
    width: 20,
    height: 20,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    position: "absolute",
    left: 15,
    bottom: 30,
  },
  badgeCount: {
    fontSize: 10,
    fontFamily: "Ubuntu-Medium",
    color: COLOR.white,
  },
});

export default styles;
