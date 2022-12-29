import { StyleSheet } from "react-native";
import COLOR from "../../assets/utils/Color";

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    marginHorizontal: 15,
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  outerCircle: {
    height: 20,
    width: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: COLOR.buttonSolid,
    alignItems: "center",
    justifyContent: "center",
  },
  innerCircle: {
    height: 10,
    width: 10,
    borderRadius: 6,
    backgroundColor: COLOR.buttonSolid,
  },
  title: {
    fontSize: 15,
    fontFamily: "Ubuntu-Regular",
    color: COLOR.dullBlack,
    paddingLeft: 10,
  },
});
export default styles;
