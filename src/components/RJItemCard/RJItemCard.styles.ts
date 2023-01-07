import { StyleSheet } from "react-native";
import COLOR from "../../assets/utils/Color";

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: COLOR.white,
    marginHorizontal: 10,
    borderRadius: 10,
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
    margin: 5,
  },
  prodName: {
    fontSize: 15,
    fontFamily: "Ubuntu-Medium",
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
  contentBlock: {
    flex: 1.5,
    paddingLeft: 10,
    paddingTop: 10,
  },
  sizeContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  counterBlock: {
    justifyContent: "space-evenly",
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
  title: {
    fontSize: 11,
    fontFamily: "Ubuntu-Bold",
    paddingTop: 3,
    color: COLOR.darkGray,
  },
  subHeading: {
    fontSize: 12,
    fontFamily: "Ubuntu-Medium",
    paddingVertical: 3,
    color: COLOR.dullBlack,
  },
});
export default styles;
