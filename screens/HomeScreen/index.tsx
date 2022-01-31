import * as React from "react";
import { Image, Text, View, StyleSheet, FlatList } from "react-native";
import ChatRooms from "../../assets/data/ChatRooms";
import ChatRoomItem from "../../components/ChatRoomItem";

const msg1 = ChatRooms[0]

export default function HomeScreen() {
  return (
    <View style={styles.root}>
     <FlatList
      data={ChatRooms}
      renderItem={({item}) => <ChatRoomItem chatRoom={item}/>}
      showsVerticalScrollIndicator={false}
     />
    </View>
  );
}

const styles = StyleSheet.create({
  root:{
    flex: 1,
    backgroundColor: 'white'
  }
});

