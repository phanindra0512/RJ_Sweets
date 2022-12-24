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
  servicesHeading: {
    color: COLOR.headings,
    fontSize: 18,
    fontFamily: "Ubuntu-Bold",
    paddingVertical: 15,
  },
  cardContainer: {
    width: 65,
    height: 60,
    backgroundColor: "transparent",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  servicesContainer: {
    // marginTop: 60,
    paddingLeft: 15,
  },
  servicesBlock: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  servicesTitle: {
    fontSize: 14,
    fontFamily: "Ubuntu-Bold",
    textAlign: "center",
    paddingTop: 8,
    color: COLOR.headings,
  },
  coroselContainer: {
    backgroundColor: "#f5f5f5",
    height: 130,
    marginTop: 80,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default styles;
