import {decode as atob, encode as btoa} from 'base-64'
import { Image , View , Text , StyleSheet} from 'react-native';
import {t} from 'react-native-tailwindcss'
const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    stretch: {
      width: 200,
      height: 300,
      resizeMode: 'stretch',
    },
  });
const Base64Image   = ({base64String}) =>{
     var base64Icon = 'data:image/png;base64,' + base64String;
     console.log(base64Icon);
   return <Image style = {[t.h40,t.w40,t.borderR5]} source = {{uri:base64Icon}} alt="Base 64 image"/>
};




export default Base64Image;