import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { initializeApp } from "firebase/app";
import '../../config/firebase';
import config from '../../Utils/Config';
import {getAuth , createUserWithEmailAndPassword} from 'firebase/auth';
const auth  = getAuth();
export default  function Signup() {

  const [value , setValue] = useState({email:'' , password:'' , error:''});

  async function doSignup(){
    if (value.email=='' || value.password=='' || value.user_id==''  || value.phone_no==''){
        {
            setValue({...value , error:'One or more necessary fields are missing'})
        }
        return ;
    }

    try{
        const responseFromAuth = await createUserWithEmailAndPassword(auth , value.email , value.password);
        const authData = {...responseFromAuth};
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
              user_email:value.email,
              user_id:authData.user.uid,
              user_location:value.user_location,
              user_name:value.user_name
          })
      };
      const responsedata = await  fetch(`${config.flaskapi}/home/signUp`,requestOptions);
        return Promise.resolve(responsedata);
    }
    catch(error){
        setValue({
            ...value,
            error:error.message
        })
        return Promise.reject(error);
    }


  }

  return (
    <View>
       <Text>Sign Up</Text>

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
        <Input placeholder = 'Enter your user name'
        value = {value.user_name}
        onChangeText = {(text)=>setValue({...value , user_name:text})}
        />
      </View>
      <View>
        <Input placeholder = 'Enter your phone no'
        value = {value.phone_no}
        onChangeText = {(text)=>setValue({...value , phone_no:text})}
        />
      </View>

      <View>
        <Input placeholder = 'Enter your area name'
        value = {value.user_location}
        onChangeText = {(text)=>setValue({...value , user_location:text})}
        />
      </View>
      <View>
        <Button  onPress = {doSignup} title = "Sign Up"/>
      </View> 
    </View>
  );
}