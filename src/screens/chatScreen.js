import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, StyleSheet, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import HotelCarousel from '../components/chat/hotelCarousel';
import RenderChat from '../components/chat/renderChat';
import EmptyStart from '../components/chat/emptyStart';

const messages = [
    { 
        id: '1', 
        text: 'My pleasure anytime..', 
        sender: 'other',
        component: <HotelCarousel/>
     },
    { id: '2', text: 'see you', sender: 'other' },
    { id: '3', text: 'Sure anytime', sender: 'me' },
    { id: '4', text: 'see you', sender: 'me' },
    { id: '5', text: 'What is google?', sender: 'other' },
    { id: '6', text: 'Google LLC is an American multinational technology company that specializes in Internet-related services and products.', sender: 'me' },
    { id: '7', text: 'Oh great! Thanks', sender: 'other' },
    { id: '8', text: 'Sure anytime', sender: 'me' },
];

const ChatScreen = () => {
   const [message, setMessage] = useState('');
   const [enabledSendButton, setEnabledSendButton] = useState(false);

    const htmlContent = `
    <p><h3>Hello World</h3>This is a paragraph with <strong>bold text</strong> and <em>italic text</em>.
    Here are some emojis: 😊😂👍
    And here is a link: <a href="https://www.google.com">Google</a><br/>here are the latest hotels, check this out,</p>`;

    const selfHtmlContent = `<p>This is a paragraph</p>`;

    const sendMessage = () => {
        console.log("Message", message);
        setMessage('');
    }


    useEffect(() => {
        if(message && message.length > 1) {
            setEnabledSendButton(true);
        }
    }, [message])

    return (
        <KeyboardAvoidingView
            style={styles.keyboardAvoidingView}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
        >
            <ScrollView 
                contentContainerStyle={[styles.chat]} 
                > 
                {/* <EmptyStart /> */}
                
                <RenderChat owner="ai" text={htmlContent}/>
                <RenderChat owner="self" text={selfHtmlContent}/>
                {/* <RenderChat owner="ai" text={htmlContent}/> */}
            </ScrollView>
           
            <SafeAreaView style={styles.inputWrapper}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Message" onChangeText={(e) => setMessage(e)} value={message}/>
                    <TouchableOpacity style={styles.sendButton} onPress={sendMessage} disabled={!enabledSendButton}>
                        <Text style={styles.sendButtonText}>➤</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    keyboardAvoidingView: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    username: {
        fontWeight: 'bold',
        flex: 1,
    },
    status: {
        color: 'green',
        marginRight: 10,
    },
    callIcons: {
        flexDirection: 'row',
    },
    chat: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        // flex: 1,
        gap: 15
    },
    messageContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginVertical: 5,
        width: '100%',
    },
    myMessageContainer: {
        justifyContent: 'flex-end',
    },
    otherMessageContainer: {
        justifyContent: 'flex-start',
    },
    chatAvatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 10,
    },
    message: {
        padding: 10,
        borderRadius: 10,
        maxWidth: '75%',
    },
    myMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#cce4f7',
    },
    otherMessage: {
        alignSelf: 'flex-start',
    },
    messageText: {
        fontSize: 16,
    },
    inputWrapper: {
        // borderTopWidth: 1,
        // borderColor: '#e0e0e0',
        backgroundColor: '#fff',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    input: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f4f6f8',
        borderRadius: 20,
        marginRight: 10,
    },
    sendButton: {
        padding: 10,
        backgroundColor: '#007bff',
        borderRadius: 20,
    },
    sendButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default ChatScreen;
