import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    common:{
        backgroundColor:"white"
    },
    container:{
        width : "100%",
        padding:20,
        top:280,
        backgroundColor:"white"
        },
    button : {
        backgroundColor: "orange",
        height: 40,
        width: 350,
        padding: 10,
        margin: 15,
        borderRadius: 10
    },
    buttonText:{
        textAlign: "center",
        fontSize: 15,
        letterSpacing: 1,
        fontWeight: 'bold'
        // fontFamily: "Poppins-Regular"
    },
    headerWrapper:{
        height: 100,
        width:"100%",
    },
    headerText:{
        fontSize:38,
        letterSpacing:1.5,
        textAlign: "center"
    },
    form:{
        marginTop : 2,
    },
    login:{
        height:52,
        top:285,
        backgroundColor:"white"
        
    },
    credinput:{
        borderRadius:10,
        height:45,
        padding:13
    },
    image:{
        height:110,
        width:350,
        top:150,
        left:45 , 
        backgroundColor:"white"
    },
    scrollview:{
        height:110,
    }

})

export default styles;