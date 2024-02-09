import { Text, View, Image, TextInput, Button } from 'react-native';
import { useEffect , useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import { MaterialIcons,Entypo } from '@expo/vector-icons'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import showErrorToast from '../../Utils/ErrorHandlerPopup';
import Styles from '../Styles/signinstyles'
import '../../config/firebase';

const auth  = getAuth();

export default  function Signin() {
  // Set an initializing state while Firebase connects
  // Handle user state changes
  const navigation = useNavigation();
  const [value , setValue] = useState({email:'' , password:'' , error:''});

  useEffect(() => {
    if(value.error != '')showErrorToast(value.error);
  },[value.error]);

  async function doSignIn(){
    if (value.email=='' || value.password==''){
        setValue({...value , error:'Email and Password are mandatory'})
        return ;
    }

    try{
        await signInWithEmailAndPassword(auth , value.email , value.password);
    }
    catch(error){
        switch (error.message) {

          case "Firebase: Error (auth/wrong-password).":
            setValue({...value, error: "Wrong Password"})
            break;
        
          case "Firebase: Error (auth/invalid-email).":
            setValue({...value, error :"Invalid Email"})
            break;

          case "Firebase: Error (auth/user-not-found).":
            setValue({...value, error: "User not found"});
            break;

          case "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).":
            setValue({...value, error: "Too many faild login attempts. Try again later or reset password"});
            break;

          default:
            setValue({...value, error: error.message});
            break;
        }   
    }
  }

  return (
    <SafeAreaView style = {Styles.main}>

      <View style={Styles.imageContainer}>
        <View style = {Styles.imageWrapper}>
          <Image style = {Styles.image} source={require('../../static/logo.jpg')} />
        </View>
      </View>

      <View style={Styles.formContainer}>
        <View style = {Styles.formWrapper}>
          <View style={Styles.form}>
            <View style={Styles.inputWrapper}>
              <MaterialIcons name="email" size={28} color="#ffa31a" />
              <TextInput 
                style = {Styles.credInput} 
                placeholder = 'Enter your email' 
                placeholderTextColor="grey" 
                value = {value.email}
                onChangeText = {(text)=>setValue({...value , email:text})}>
              </TextInput>
            </View>

            <View style={Styles.inputWrapper}>
              <Entypo name="lock" size={28} color="#ffa31a" />
              <TextInput 
                style = {Styles.credInput} 
                placeholder='Enter your password' 
                placeholderTextColor="grey" 
                value = {value.password}
                onChangeText = {(text)=>setValue({...value , password:text})}
                secureTextEntry = {true}/>
            </View>

            <View style={Styles.button}>
              <Button 
                  title='LOGIN'
                  color="#ffa31a"
                  onPress={() => doSignIn()}>
              </Button>
            </View>
          </View>
        </View>
        <View style={Styles.orWrapper}>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex:1, marginLeft: 20, height: 1, backgroundColor: '#ffad33'}} />
          <View>
            <Text style={{width: 30, color:'#ffad33', textAlign: 'center'}}>OR</Text>
          </View>
          <View style={{flex: 1, marginRight:20, height: 1, backgroundColor: '#ffad33'}} />
        </View>

          <Text style={Styles.orWrapperText}>Don't have an account ? Please signup</Text>
          <View style={Styles.button}>
            <Button
             color="#ffa31a"
             title='SIGN UP'
             onPress={()=>navigation.navigate('Signup')}>
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}