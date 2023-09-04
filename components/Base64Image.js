import {decode as atob, encode as btoa} from 'base-64'
import { Image , View , Text , StyleSheet} from 'react-native';
import {t} from 'react-native-tailwindcss'

const Base64Image   = ({base64String}) =>{
     var base64Icon = 'data:image/png;base64,' + base64String;
   return <Image style = {{height:80 , width:80 , left:26}} source = {{uri:base64Icon}} alt="Base 64 image"/>
};




export default Base64Image;