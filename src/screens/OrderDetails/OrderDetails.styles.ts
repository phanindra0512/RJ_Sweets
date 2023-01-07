import { StyleSheet, Dimensions } from "react-native";
import COLOR from "../../assets/utils/Color";

const ScreenHeight = Dimensions.get("window").height;
const ScreenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  heading: {
    fontSize: 16.5,
    fontFamily: "Ubuntu-Medium",
    color: COLOR.dullBlack,
    padding: 10,
  },
  itemsCard: {
    width: ScreenWidth - 20,
    backgroundColor: COLOR.white,
    borderRadius: 15,
    alignSelf: "center",
    paddingBottom: 15,
    paddingTop: 5,
    paddingRight: 10,
  },
  prodName: {
    fontSize: 15,
    fontFamily: "Ubuntu-Medium",
    color: COLOR.black,
  },
  subText: {
    fontSize: 14,
    fontFamily: "Ubuntu-Regular",
    color: COLOR.darkGray,
    paddingVertical: 5,
  },
  costContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    paddingTop: 5,
  },
  ordertitle: {
    fontSize: 13,
    fontFamily: "Ubuntu-Regular",
    color: COLOR.dullBlack,
  },
  orderContent: {
    fontSize: 15,
    fontFamily: "Ubuntu-Medium",
    color: COLOR.black,
    paddingVertical: 4,
  },
  statusContainer: {
    backgroundColor: COLOR.green,
    width: 90,
    height: 25,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  status: {
    fontSize: 13,
    color: COLOR.white,
    fontFamily: "Ubuntu-Medium",
  },
});

export default styles;
