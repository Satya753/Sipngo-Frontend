import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import '../../config/firebase';
import config from '../../Utils/Config';
import {getAuth , createUserWithEmailAndPassword} from 'firebase/auth';
import { Entypo, MaterialIcons } from '@expo/vector-icons'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import showErrorToast from '../../Utils/ErrorHandlerPopup';

import styles from '../Styles/signUpStyles';
import GlobalContext from '../GlobalContext';
const auth  = getAuth();

export default function Signup() {

  const { userDetails, setUserDetails } = useContext(GlobalContext);
  const [ inputBorderColor, setInputBorderColor] = useState({email: false, password:false, user_name: false, phone_no: false, user_location:false});
  
  async function doSignup(){

    if(userDetails.email == ''){
      setUserDetails({...userDetails, error:'Email is mandatory'});
      return;
    } else if(userDetails.password == ''){
      setUserDetails({...userDetails, error: 'Password is mandatory'});
      return;
    } else if(userDetails.user_name == '' || !(/^[a-zA-Z]+$/.test(userDetails.user_name)) ){
      setUserDetails({...userDetails, error: "Enter a valid name"});
      return;
    } else if(userDetails.phone_no == '' || userDetails.phone_no.length != 10){
      setUserDetails({...userDetails, error:"Enter a valid phone no."});
      return;
    }

    try{
        const responseFromAuth = await createUserWithEmailAndPassword(auth , userDetails.email , userDetails.password);
        const authData = {...responseFromAuth};
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
              user_email:userDetails.email,
              user_id:authData.user.uid,
              user_phoneNo: userDetails.phone_no,
              user_location: userDetails.user_location,
              user_name:userDetails.user_name
          })
      };
      const responsedata = await fetch(`${config.flaskapi}/home/signUp`,requestOptions);
      setUserDetails({});
      return Promise.resolve(responsedata);
    }
    catch(error){
        switch (error.message) {
          case "Firebase: Error (auth/invalid-email).":
            setUserDetails({...userDetails, error: "Invalid Email"});
            break;
          case "Firebase: Error (auth/email-already-in-use).":
            setUserDetails({...userDetails, error: "Email already registered."});
            break;
          case "Firebase: Password should be at least 6 characters (auth/weak-password).":
            setUserDetails({...userDetails, error: "Password should be at least 6 characters (weak-password)."})
            break;
          default:
            setUserDetails({...userDetails, error: error.message });
            break;
        }
        return Promise.reject(error);
    }
  }

  useEffect( () => {
    if(userDetails.error != null){
      showErrorToast(userDetails.error);
    }

    return ()=> setUserDetails({});
  }, [userDetails.error]);

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
            value = {userDetails.email}
            onFocus={() => onFocusHandler('email')}
            onBlur={() => onBlurHandler('email')}
            onChangeText = {(text)=>setUserDetails({...userDetails , email:text})}
            style={styles.input} />
        </View>
        <View style={{...styles.inputWrapper, borderColor: inputBorderColor.password ? '#ffa31a' : 'transparent'}}>
          <Entypo name="lock" style={styles.icon} size={24} color="black" />
          <TextInput 
            placeholder = '*Password'
            placeholderTextColor="grey" 
            value = {userDetails.password}
            onChangeText = {(text)=>setUserDetails({...userDetails , password:text})}
            onFocus={() => onFocusHandler('password')}
            onBlur={() => onBlurHandler('password')}
            secureTextEntry = {true}
            style={styles.input}/>
        </View>
        <View style={{...styles.inputWrapper, borderColor: inputBorderColor.user_name ? '#ffa31a' : 'transparent'}}>
          <Entypo name="user" style={styles.icon} size={24}  />
          <TextInput 
            placeholder = '*Name'
            placeholderTextColor="grey" 
            value = {userDetails.user_name}
            onChangeText = {(text)=>setUserDetails({...userDetails , user_name:text})}
            onFocus={() => onFocusHandler('user_name')}
            onBlur={() => onBlurHandler('user_name')}
            style={styles.input}/>
        </View>
        <View style={{...styles.inputWrapper, borderColor: inputBorderColor.phone_no ? '#ffa31a' : 'transparent'}}> 
        <Entypo name="phone" style={styles.icon} size={24} />
          <TextInput 
            placeholder = '*Phone'
            placeholderTextColor="grey" 
            keyboardType='phone-pad'
            inputMode='numeric'
            value = {userDetails.phone_no}
            onChangeText = {(text)=>setUserDetails({...userDetails , phone_no:text})}
            onFocus={() => onFocusHandler('phone_no')}
            onBlur={() => onBlurHandler('phone_no')}
            style={styles.input}/>
        </View>
        <View style={{...styles.inputWrapper, borderColor: inputBorderColor.user_location ? '#ffa31a' : 'transparent'}}>
          <MaterialIcons name="location-on" style={styles.icon} size={24} />
          <TextInput 
            placeholder = '*Location'
            placeholderTextColor="grey" 
            value = {userDetails.user_location}
            onChangeText = {(text)=>setUserDetails({...userDetails , user_location:text})}
            onFocus={() => onFocusHandler('user_location')}
            onBlur={() => onBlurHandler('user_location')}
            style={styles.input}/>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title='REGISTER NOW'
            onPress = {doSignup}
            color="#ffa31a"
            >
            </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}