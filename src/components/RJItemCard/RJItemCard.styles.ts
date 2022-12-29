import { StyleSheet } from "react-native";
import COLOR from "../../assets/utils/Color";

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: COLOR.white,
    height: 100,
    marginHorizontal: 10,
    borderRadius: 10,
    flexDirection: "row",
  },
  image: {
    width: 85,
    height: 85,
    borderRadius: 10,
    margin: 5,
  },
  prodName: {
    fontSize: 15,
    fontFamily: "Ubuntu-Bold",
    color: COLOR.black,
  },
  prodPrice: {
    fontSize: 13,
    fontFamily: "Ubuntu-Bold",
    paddingVertical: 3,
    color: COLOR.black,
  },
  description: {
    fontSize: 11,
    fontFamily: "Ubuntu-Medium",
    color: COLOR.darkGray,
  },
  counterBlock: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  buttonContainer: {
    width: 90,
    backgroundColor: COLOR.buttonSolid,
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    borderRadius: 7,
  },
  buttonTitle: {
    fontSize: 14,
    fontFamily: "Ubuntu-Bold",
    color: COLOR.white,
  },
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
});
export default styles;
