import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import styles from "./styles";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";

const HomeHeader = () => {
  return (
    <SafeAreaView>
     <View style={styles.container}>
	 <Image
        style={styles.image}
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
        }}
      />
      <Text style={styles.title}>Signal</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity>
          <AntDesign name="camerao" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <SimpleLineIcons name="pencil" size={24} color="black" />
        </TouchableOpacity>
      </View>
	</View>
    </SafeAreaView>
  );
};

export default HomeHeader;
