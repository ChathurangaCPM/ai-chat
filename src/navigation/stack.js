/* eslint-disable react-native/no-inline-styles */
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ChatScreen from '../screens/chatScreen';
import MainChatHeder from '../components/mainChatHeder';
import ChatDetails from '../screens/chatDetails';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Chat">
            {/* Onboarding related routes */}


            <Stack.Screen
                name="Chat"
                component={ChatScreen}
                options={{
                    headerShown: true,
                    //   headerTransparent: true,
                    title: 'Base on Current Location',
                    headerBackgroundContainerStyle: {
                        // backgroundColor: '#fff',
                    },
                    headerStyle: {
                        elevation: 0, 
                        shadowOpacity: 0,
                        borderBottomWidth: 0,
                    },
                    // header: ({ scene, previous, navigation }) => (
                    //     <MainChatHeder prop={{ scene, previous, navigation }}/>
                    // ),
                }}
            />
            <Stack.Screen
                name="ChatDetails"
                component={ChatDetails}
                options={{
                    headerBackTitle: 'Chat',
                    title: 'Hotel Details',
                    presentation: 'modal'  
                }}
            />
        </Stack.Navigator>
    );
};

export default MainStackNavigator;