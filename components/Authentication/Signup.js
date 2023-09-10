import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { Input, Button } from 'react-native-elements';
import '../../config/firebase';
import config from '../../Utils/Config';
import {getAuth , createUserWithEmailAndPassword} from 'firebase/auth';
import { Entypo, MaterialIcons, FontAwesome } from '@expo/vector-icons'; 
import styles from '../Styles/signUpStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import showErrorToast from '../../Utils/ErrorHandlerPopup';

const auth  = getAuth();

export default function Signup() {

  const [value , setValue] = useState({email:'' , password:'', user_name:'', phone_no:'' , error:''});
  const [ inputBorderColor, setInputBorderColor] = useState({email: false, password:false, user_name: false, phone_no: false});
  async function doSignup(){

    if(value.email == ''){
      setValue({...value, error:'Email is mandatory'});
    } else if(value.password == ''){
      setValue({...value, error: 'Password is mandatory'});
    } else if(value.user_name == '' || !(/^[a-zA-Z]+$/.test(value.user_name)) ){
      setValue({...value, error: "Enter a valid name"});
    } else if(value.phone_no == '' || value.phone_no.length != 10){
      setValue({...value, error:"Enter a valid phone no."});
    }

    if(value.error != '')return

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
        console.log(error.message);
        switch (error.message) {
          case "Firebase: Error (auth/invalid-email).":
            setValue({...value, error: "Invalid Email"});
            break;
          case "Firebase: Error (auth/email-already-in-use).":
            setValue({...value, error: "Email already registered."});
            break;
          case "Firebase: Password should be at least 6 characters (auth/weak-password).":
            setValue({...value, error: "Password should be at least 6 characters (weak-password)."})
            break;

          default:
            setValue({...value, error: error.message });
            break;
        }
        return Promise.reject(error);
    }
  }

  useEffect( () => {
    if(value.error != '')showErrorToast(value.error);
  }, [value.error]);

  const onFocusHandler = (inputField) => {
    let newInputBorderColor = {...inputBorderColor};
    newInputBorderColor[inputField] = true;
    setInputBorderColor(newInputBorderColor);
  }

  const onBlurHandler = (inputField) => {
    let newInputBorderColor = {...inputBorderColor};
    newInputBorderColor[inputField] = false;
    setInputBorderColor(newInputBorderColor);
  }

  return (
    <SafeAreaView style={styles.main}>

      <Text style={styles.header}>Signup</Text>

      <View style={styles.formContainer}>

        <View style={{...styles.inputWrapper, borderColor: inputBorderColor.email ? '#ffa31a' : 'transparent'}}>
          <MaterialIcons style={styles.icon} name="email" size={24} color="black" />
          <TextInput 
            placeholder = '*Email'
            keyboardType='email-address'
            placeholderTextColor="grey" 
            value = {value.email}
            onFocus={() => onFocusHandler('email')}
            onBlur={() => onBlurHandler('email')}
            onChangeText = {(text)=>setValue({...value , email:text})}
            style={styles.input} />
        </View>

        <View style={{...styles.inputWrapper, borderColor: inputBorderColor.password ? '#ffa31a' : 'transparent'}}>
          <Entypo name="lock" style={styles.icon} size={24} color="black" />
          <TextInput 
            placeholder = '*Password'
            value = {value.password}
            onChangeText = {(text)=>setValue({...value , password:text})}
            onFocus={() => onFocusHandler('password')}
            onBlur={() => onBlurHandler('password')}
            secureTextEntry = {true}
            style={styles.input}/>
        </View>

        <View style={{...styles.inputWrapper, borderColor: inputBorderColor.user_name ? '#ffa31a' : 'transparent'}}>
          <Entypo name="user" style={styles.icon} size={24}  />
          <TextInput 
            placeholder = '*Name'
            value = {value.user_name}
            onChangeText = {(text)=>setValue({...value , user_name:text})}
            onFocus={() => onFocusHandler('user_name')}
            onBlur={() => onBlurHandler('user_name')}
            style={styles.input}/>
        </View>

        <View style={{...styles.inputWrapper, borderColor: inputBorderColor.phone_no ? '#ffa31a' : 'transparent'}}> 
        <Entypo name="phone" style={styles.icon} size={24} />
          <TextInput 
            placeholder = '*Phone'
            keyboardType='phone-pad'
            inputMode='numeric'
            value = {value.phone_no}
            onChangeText = {(text)=>setValue({...value , phone_no:text})}
            onFocus={() => onFocusHandler('phone_no')}
            onBlur={() => onBlurHandler('phone_no')}
            style={styles.input}/>
        </View>

        {/* <View style={styles.inputWrapper}>
          <MaterialIcons name="location-on" style={styles.icon} size={24} />
          <TextInput 
          placeholder = '*Location'
          value = {value.user_location}
          onChangeText = {(text)=>setValue({...value , user_location:text})}
          style={styles.input}/>
        </View> */}

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress = {doSignup}>
            <Text style={styles.buttonText}>REGISTER NOW</Text> 
          </TouchableOpacity>
        </View>

      </View>

      
    </SafeAreaView>
  );
}