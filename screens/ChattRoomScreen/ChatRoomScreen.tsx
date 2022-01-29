import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import React from 'react';
import Message from '../../components/Message/Message';
import Chats from '../../assets/data/Chats';
import MessageInput from '../../components/MessageInput';

export default function ChatRoomScreen(){
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
