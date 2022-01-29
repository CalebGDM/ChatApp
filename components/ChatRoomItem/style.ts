import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  rightContainer: {
    flex: 1,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: 55,
    height: 55,
    resizeMode: "cover",
    borderRadius: 70,
    marginRight: 10,
  },
  badgeContainer:{
    position: "absolute",
    backgroundColor: '#3872E9',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    left: 47,
    top: 10,
  },
  badgeText:{
    color: 'white',
    fontWeight: '700',
    fontSize: 12
  },
  name: {
    fontWeight: "600",
    fontSize: 17,
    marginBottom:3,
  },
  text: {
    color: "gray",
  },
  
});

export default styles;
