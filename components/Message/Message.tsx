import React from "react";
import { Text, View } from "react-native";
import styles from "./style";

export default function Message({ messageData }) {
  const isMe = messageData.user.id === "u1";

  return (
    <View
      style={[
        styles.container,
        isMe ? styles.containerMe : styles.containerHim,
      ]}
    >
      <Text style={[styles.text, { color: isMe ? "black" : "white" }]}>
        {messageData.content}
      </Text>
    </View>
  );
}
