import { Text, View, StyleSheet, Image  , FlatList , TextInput } from 'react-native';
import { Card  } from 'react-native-paper';
import { useContext, useEffect , useState } from 'react';
import GlobalContext from '../GlobalContext';
import { Input, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import {t , tw} from 'react-native-tailwindcss';
import { initializeApp } from "firebase/app";
import '../../config/firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {getAuth , signInWithEmailAndPassword} from 'firebase/auth';
import Styles from '../Styles/signinstyles'
const auth  = getAuth();
export default  function Signin() {
  // Set an initializing state while Firebase connects
  // Handle user state changes
  const navigation = useNavigation();

  const [value , setValue] = useState({email:'' , password:'' , error:''});

  async function doSignIn(){
    if (value.email=='' || value.password==''){
        {
            setValue({...value , error:'Email and Password are mandatory'})
        }

        return ;
    }

    try{
        await signInWithEmailAndPassword(auth , value.email , value.password);
    }
    catch(error){
        setValue({
            ...value,
            error:error.message
        })
    }


  }

  return (
    <View style ={Styles.container} >
      {!!value.error && <Text>{value.error}</Text>}
      <View style = {Styles.form}>
       <View>
        <TextInput placeholder = 'Enter your email'
        value = {value.email}
        onChangeText = {(text)=>setValue({...value , email:text})}

      >
      </TextInput>
      </View>   

       <View>
        <TextInput placeholder = 'Enter your password'
        value = {value.password}
        onChangeText = {(text)=>setValue({...value , password:text})}
        secureTextEntry = {true}/>
      </View>

      <View>
        <Button onPress = {doSignIn} title = "Sign In" />
      </View> 
      </View>
      <Text>Don't have an account ? Please signup</Text>
      <TouchableOpacity 
          style = {Styles.button} 
          onPress={()=>navigation.navigate('Signup')}>
            <Text style={Styles.buttonText}>
              Sign Up
            </Text>
        </TouchableOpacity>
    </View>
  );
}