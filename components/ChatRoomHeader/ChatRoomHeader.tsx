import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import { FontAwesome, Entypo } from "@expo/vector-icons";

const ChatRoomHeader = ({ data }) => {
  const navigation = useNavigation();
  console.log(data.options);

  const onGoBackPressed = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.root}>
        <View style={styles.container}>
      <TouchableOpacity onPress={onGoBackPressed}>
        <Ionicons name="chevron-back" size={30} color="white" />
      </TouchableOpacity>
      <Image
        style={styles.image}
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png",
        }}
      />
      <Text style={styles.text}>{data.options.title}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={onGoBackPressed}>
          <FontAwesome name="video-camera" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onGoBackPressed}>
          <FontAwesome name="phone" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onGoBackPressed}>
          <Entypo name="dots-three-vertical" size={24} color="white" />
        </TouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
  );
};

export default ChatRoomHeader;
