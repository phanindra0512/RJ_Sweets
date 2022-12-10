import { StyleSheet } from "react-native";
import COLOR from "../../assets/utils/Color";

const styles = StyleSheet.create({
  searchComponent: {
    height: 45,
    backgroundColor: COLOR.whiteDull,
    margin: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  inputStyles: {
    fontSize: 16,
    fontFamily: "Ubuntu-Light",
  },
});
export default styles;
