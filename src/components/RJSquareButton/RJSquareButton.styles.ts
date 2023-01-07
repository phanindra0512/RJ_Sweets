import { StyleSheet } from "react-native";
import COLOR from "../../assets/utils/Color";

const styles = StyleSheet.create({
  outerCircle: {
    height: 16,
    width: 16,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: COLOR.buttonSolid,
    alignItems: "center",
    justifyContent: "center",
  },
  innerCircle: {
    height: 8,
    width: 8,
    borderRadius: 6,
    backgroundColor: COLOR.buttonSolid,
  },
});
export default styles;
