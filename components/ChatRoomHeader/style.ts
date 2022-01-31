import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#3872E9",
  },
  container: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: "cover",
    borderRadius: 20,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 10
  },
  buttonsContainer: {
    width: 100,
    flexDirection: "row",
    marginLeft: "auto",
    justifyContent: "space-between",
  },
});

export default styles;
