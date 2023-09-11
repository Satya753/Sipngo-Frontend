import { Image } from 'react-native';

const Base64Image   = ({base64String}) =>{
    var base64Icon = 'data:image/png;base64,' + base64String;
    return <Image style = {{height:120,  width:"100%", borderTopLeftRadius: 5, borderTopRightRadius: 5, resizeMode:"contain", flex: 1}} source = {{uri:base64Icon}} alt="Base 64 image"/>
};

export default Base64Image;