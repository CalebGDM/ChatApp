import * as React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import ChatRoomItem from "../../components/ChatRoomItem";


export default function TabOneScreen() {
  return (
    <View style={styles.root}>
     <ChatRoomItem/> 
    </View>
  );
}

const styles = StyleSheet.create({
  root:{
    flex: 1,
    backgroundColor: 'white'
  }
});

