import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
    borderRadius: 50,
  },
  title:{
    marginLeft: 30,
    fontSize: 20,
    fontWeight: '600',
  },
  buttonsContainer:{
      flexDirection: 'row',
      width: 60,
      justifyContent: 'space-between',
  }
});

export default styles;
