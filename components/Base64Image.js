import { Image } from 'react-native';

const Base64Image   = ({base64String}) =>{
    var base64Icon = 'data:image/png;base64,' + base64String;
    return <Image style = {{ height:120, borderRadius: 15}} source = {{uri:base64Icon}} alt="Base 64 image"/>
};

export default Base64Image;