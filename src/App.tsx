/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import ChatScreen from './screens/chatScreen';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MainNavigator from './navigation/mainNavigator';

function App(): React.JSX.Element {
  

  return (
    <GestureHandlerRootView style={{flex: 1}}>    
      <MainNavigator />
    </GestureHandlerRootView>
  );
}


export default App;
