import * as React from "react";
import { Image, Text, View } from "react-native";
import styles from "./style";

export default function ChatRoomItem({ chatRoom }) {
  const user = chatRoom.users[1];
  return (
    <View style={styles.container}>
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
    </View>
  );
}
