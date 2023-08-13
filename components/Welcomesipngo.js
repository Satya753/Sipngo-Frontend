import { Text, View, StyleSheet, Image  , FlatList } from 'react-native';
import { Button , Card} from 'react-native-paper';
import { useContext, useEffect , useState } from 'react';
import GlobalContext from './GlobalContext';
import { useNavigation } from '@react-navigation/native';
import {t , tw} from 'react-native-tailwindcss';

export default  function Welcomesipngo() {

    const navigation = useNavigation();

  return (
    <View>
    <Button style = {[t.bgGreen600 , t.w40  , t.right10 , t.textWhite  , t.roundedLg]}onPress={()=>navigation.navigate('Signin')}><Text style={[t.textWhite]}>Sign In</Text></Button>
    <Button style = {[t.bgGreen600 , t.w40  , t.right10 , t.textWhite  , t.roundedLg]}onPress={()=>navigation.navigate('Signup')}><Text style={[t.textWhite]}>Sign Up</Text></Button>
    </View>
  );
}
