import { StyleSheet, Dimensions } from "react-native";
import COLOR from "../../assets/utils/Color";
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  addressBlock: {
    backgroundColor: COLOR.white,
    marginTop: 10,
    padding: 15,
  },
  addressContent: {
    fontSize: 14,
    fontFamily: "Ubuntu-Regular",
    color: COLOR.dullBlack,
  },
  heading: {
    fontSize: 16,
    fontFamily: "Ubuntu-Medium",
    color: COLOR.dullBlack,
    padding: 10,
  },
  itemsCard: {
    width: windowWidth - 20,
    backgroundColor: COLOR.white,
    borderRadius: 10,
    alignSelf: "center",
    // paddingHorizontal: 10,
  },
  payCard: {
    borderBottomWidth: 1,
    borderBottomColor: COLOR.subheadingLight,
    // paddingVertical: 15,
  },
  title: {
    fontSize: 15,
    fontFamily: "Ubuntu-Regular",
    color: COLOR.black,
    paddingLeft: 10,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    // height: 60,
    flexDirection: "row",
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 7,
    backgroundColor: COLOR.white,
  },

  amountContainer: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 10,
  },
  count: { fontSize: 13, fontFamily: "Ubuntu-Medium", color: COLOR.dullBlack },
  nextNavigation: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    backgroundColor: COLOR.buttonSolid,
    borderRadius: 8,
  },
});
export default styles;
