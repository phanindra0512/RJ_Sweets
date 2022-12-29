import { StyleSheet, Dimensions } from "react-native";
import COLOR from "../../assets/utils/Color";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  heading: {
    fontSize: 16.5,
    fontFamily: "Ubuntu-Medium",
    color: COLOR.dullBlack,
    padding: 10,
  },
  itemsCard: {
    width: windowWidth - 20,
    backgroundColor: COLOR.white,
    borderRadius: 15,
    alignSelf: "center",
  },
  title: { fontSize: 16, fontFamily: "Ubuntu-Regular", color: COLOR.black },
  billCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  star: {
    color: "red",
  },
  addressDetails: {
    backgroundColor: COLOR.white,
    position: "absolute",
    bottom: 0,
    left: 5,
    right: 5,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  address: {
    fontSize: 14,
    fontFamily: "Ubuntu-Regular",
    color: COLOR.darkGray,
    paddingLeft: 10,
    paddingBottom: 10,
  },

  bottomContainer: {
    height: 60,
    flexDirection: "row",
    marginHorizontal: 10,
    borderRadius: 7,
    backgroundColor: COLOR.buttonSolid,
  },

  amountContainer: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 10,
  },
  count: { fontSize: 13, fontFamily: "Ubuntu-Medium", color: COLOR.white },
  nextNavigation: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
    paddingRight: 20,
  },
});
export default styles;
