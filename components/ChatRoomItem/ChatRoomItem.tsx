import * as React from "react";
import { Image, Text, View } from "react-native";
import styles from "./style";

export default function ChatRoomItem() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
        }}
      />
      <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>2</Text>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>Vadin Savim</Text>
          <Text style={styles.text}>11:00pm</Text>
        </View>
        <Text style={styles.text} numberOfLines={1}>hola hola coca cola</Text>
      </View>
    </View>
  );
}