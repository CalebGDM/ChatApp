import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";

export default function ChatRoomItem({ chatRoom }) {
  const user = chatRoom.users[1];
  const navigation = useNavigation()

  const onChatRoomPressed = () => {
    navigation.navigate('ChatRoom', {id: chatRoom.id})
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onChatRoomPressed}>
      <Image
        style={styles.image}
        source={{
          uri: user.imageUri,
        }}
      />

      {chatRoom.newMessages && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
        </View>
      )}

      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={chatRoom.newMessages ? styles.newText : styles.text}>{chatRoom.lastMessage.createdAt}</Text>
        </View>
        <Text style={chatRoom.newMessages ? styles.newText : styles.text} numberOfLines={1}>
          {chatRoom.lastMessage.content}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
