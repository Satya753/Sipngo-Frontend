import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { initializeApp } from "firebase/app";
import '../config/firebase';
import {getAuth , createUserWithEmailAndPassword} from 'firebase/auth';
const auth  = getAuth();
export default  function Signup() {
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
        await createUserWithEmailAndPassword(auth , value.email , value.password);
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

      {!!value.error && <View>{value.error}</View>}

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
        <Button title = "Sign In" onPress = {doSignIn}/>
      </View>
    </View>
  );
}