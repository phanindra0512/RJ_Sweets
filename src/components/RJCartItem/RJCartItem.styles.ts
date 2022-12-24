import { StyleSheet } from "react-native";
import COLOR from "../../assets/utils/Color";

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 15,
    // backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
  title: { fontSize: 16, fontFamily: "Ubuntu-Regular", color: COLOR.black },
  counterContainer: {
    width: 90,
    borderRadius: 7,
    backgroundColor: COLOR.buttonSolid,
    height: 30,
    flexDirection: "row",
  },
  countBlock: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    fontSize: 14,
    fontFamily: "Ubuntu-Bold",
    color: COLOR.white,
  },
});
export default styles;
