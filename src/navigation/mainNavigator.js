import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Host} from 'react-native-portalize';
import MainStackNavigator from './stack';

const MainNavigator = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <NavigationContainer>
      <Host>
        <MainStackNavigator />
      </Host>
    </NavigationContainer>
  );
};

export default MainNavigator;