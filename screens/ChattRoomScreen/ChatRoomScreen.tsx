import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import React from 'react';
import Message from '../../components/Message/Message';
import Chats from '../../assets/data/Chats';
import MessageInput from '../../components/MessageInput';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function ChatRoomScreen(){
    const route = useRoute()
    const navigation = useNavigation()
    console.warn(route.params?.id);
    navigation.setOptions({title: 'Elon Musk'})
    
    return(
        <SafeAreaView style={styles.root}>
            <FlatList
                data={Chats.messages}
                renderItem={({item}) => <Message messageData={item}/>}
                inverted
            />
            <MessageInput/>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
  root:{
    backgroundColor: 'white',
    flex: 1
  }
});
