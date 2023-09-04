import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    common:{
        backgroundColor:"white"
    },
    container:{
        shadowRadius:6, 
        shadowOpacity:2, 
        shadowOffset:{ width: 1, height:2 },
        borderRadius:4,
        backgroundColor: 'white',
        padding:3,
        margin:3
        }

})

export default styles;