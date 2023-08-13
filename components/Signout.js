import { Text, View, StyleSheet, Image  , FlatList } from 'react-native';
import { Card  } from 'react-native-paper';
import { useContext, useEffect , useState } from 'react';
import GlobalContext from './GlobalContext';
import { Input, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import {t , tw} from 'react-native-tailwindcss';
import { initializeApp } from "firebase/app";
import '../config/firebase';
import {getAuth , signOut} from 'firebase/auth';
const auth  = getAuth();
export default  function Signout() {
  // Set an initializing state while Firebase connects
  // Handle user state changes
  return (
    <View>
       <Text>Sign In</Text>
        <Button onPress = {()=>signOut(auth)} title = "Sign Out" />
    </View>
  );
}