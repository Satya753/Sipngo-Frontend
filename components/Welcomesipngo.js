import React, { useState, useEffect } from 'react';
import { View, Text , Button } from 'react-native';
import {useNavigation} from '@react-navigation/native'
export default  function Welcomesipngo() {

    const navigation = useNavigation();

  return (
    <View>
      <Button onPress = {()=>navigation.navigate('Sign In')}><Text>Sign In</Text></Button>
      <Button onPress = {()=>navigation.navigate('Sign Up')}><Text>Sign Up</Text></Button>
    </View>
  );
}
