import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: windowWidth - 50,
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
    borderColor: "gray",
    backgroundColor: "#fff",
    fontSize: 15,
    fontFamily: "Ubuntu-Medium",
  },
});
export default styles;
