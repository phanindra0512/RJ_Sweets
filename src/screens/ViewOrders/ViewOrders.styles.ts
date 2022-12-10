import { StyleSheet, Dimensions } from "react-native";
import COLOR from "../../assets/utils/Color";

const ScreenHeight = Dimensions.get("window").height;
const ScreenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  cardContainer: {
    height: 100,
    backgroundColor: COLOR.whiteDull,
    marginHorizontal: 10,
    marginTop: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  itemsBlock: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  items: {
    flex: 1,
    fontSize: 14,
    fontFamily: "Ubuntu-Bold",
    color: COLOR.black,
  },
  totalAmount: {
    flex: 0.3,
    fontSize: 16,
    fontFamily: "Ubuntu-Bold",
    textAlign: "center",
    color: COLOR.black,
  },
  orderInfoBlock: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  orderInfo: {
    fontSize: 12,
    color: COLOR.darkGray,
    fontFamily: "Ubuntu-Medium",
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
