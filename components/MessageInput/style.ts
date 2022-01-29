import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    padding: 10,
    flexDirection: 'row'
  },
  inputContainer: {
    backgroundColor: '#e3e3e3',
    padding: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 30,
    flex: 1,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center' 
  },
  button:{
      marginHorizontal: 5
  },
  input:{
      flex: 1,
      marginLeft: 5
  },
  buttonContainer:{
      width: 40,
      height: 40,
      backgroundColor: "#3872E9",
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center'
  },
  buttonText: {
      color: 'white',
      fontSize: 20,
  }
});

export default styles;
