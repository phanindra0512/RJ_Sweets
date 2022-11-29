import { StyleSheet, Dimensions } from "react-native";
import COLOR from "../../assets/utils/Color";

const ScreenHeight = Dimensions.get("window").height;
const ScreenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  backgroundContainer: {
    height: 200,
    backgroundColor: COLOR.buttonSolid,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    // alignItems: "center",
  },
  headerBlock: {
    flexDirection: "row",
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginVertical: 20,
    paddingVertical: 10,
  },
  heading: {
    fontSize: 26,
    fontFamily: "Ubuntu-Bold",
    color: COLOR.white,
  },
  subHeading: {
    fontSize: 14,
    fontFamily: "Ubuntu-Medium",
    color: COLOR.headings,
  },
  ordersBlock: {
    height: 120,
    backgroundColor: COLOR.white,
    width: ScreenWidth - 40,
    position: "absolute",
    bottom: -60,
    elevation: 5,
    alignSelf: "center",
    borderRadius: 10,
    flexDirection: "row",
    paddingVertical: 20,
  },
  orderCountBlock: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRightColor: "#ccc",
    borderWidth: 0,
    borderRightWidth: 1.5,
    borderRightRadius: 5,
    borderStyle: "dashed",
  },
  divider: {
    borderRightColor: "#ccc",
    borderWidth: 0,
    borderRightWidth: 0.7,
    borderRightRadius: 1,
    borderStyle: "dashed",
    alignSelf: "flex-end",
  },
});
export default styles;
