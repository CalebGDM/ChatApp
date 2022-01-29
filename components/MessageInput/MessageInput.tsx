import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import styles from "./style";
import {
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  console.log(message);

  const onSendPressed = () => {
    console.warn("se envio");
    setMessage("");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
    >
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.button}>
          <AntDesign name="smileo" size={24} color="black" />
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Signal message ..."
          value={message}
          onChangeText={setMessage}
          multiline={true}
          numberOfLines={4}
        />
        <TouchableOpacity style={styles.button}>
          <AntDesign name="camerao" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <MaterialCommunityIcons
            name="microphone-outline"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
      {message ? (
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={onSendPressed}
        >
          <FontAwesome5 name="paper-plane" size={24} color="white" />
        </TouchableOpacity>
      ) : null}
    </KeyboardAvoidingView>
  );
};

export default MessageInput;
