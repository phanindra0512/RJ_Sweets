import { StyleSheet, Dimensions } from "react-native";
import COLOR from "../../assets/utils/Color";
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 30,
    alignItems: "center",
  },
  success: {
    color: COLOR.green,
    fontSize: 23,
    fontFamily: "Ubuntu-Medium",
  },
  subContent: {
    color: COLOR.darkGray,
    fontSize: 14.5,
    fontFamily: "Ubuntu-Regular",
  },
  transactionContent: {
    color: COLOR.darkGray,
    fontSize: 15,
    fontFamily: "Ubuntu-Medium",
    textAlign: "center",
  },
  verticalLine: {
    borderBottomColor: "red",
    borderBottomWidth: 0.8,
    margin: 10,
  },
  amountCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  button: {
    alignSelf: "center",
    marginVertical: 15,
  },
});
export default styles;
