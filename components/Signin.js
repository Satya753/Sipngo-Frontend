import { Text, View, StyleSheet, Image  , FlatList } from 'react-native';
import { Card  } from 'react-native-paper';
import { useContext, useEffect , useState } from 'react';
import GlobalContext from './GlobalContext';
import { Input, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import {t , tw} from 'react-native-tailwindcss';
import { initializeApp } from "firebase/app";
import '../config/firebase';
import {getAuth , signInWithEmailAndPassword} from 'firebase/auth';
const auth  = getAuth();
export default  function Signin() {
  // Set an initializing state while Firebase connects
  // Handle user state changes

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
    <View>
       <Text>Sign In</Text>
      {!!value.error && <Text>{value.error}</Text>}

       <View>
        <Input placeholder = 'Enter your email'
        value = {value.email}
        onChangeText = {(text)=>setValue({...value , email:text})}

      >
      </Input>
      </View> 

       <View>
        <Input placeholder = 'Enter your password'
        value = {value.password}
        onChangeText = {(text)=>setValue({...value , password:text})}
        secureTextEntry = {true}/>
      </View>

      <View>
        <Button onPress = {doSignIn} title = "Sign In" />
      </View> 
    </View>
  );
}