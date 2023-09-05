import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    common:{
        backgroundColor:"white"
    },
    container:{
        shadowRadius:6, 
        shadowOpacity:4, 
        shadowOffset:{ width: 1, height:2 },
        borderRadius:4,
        backgroundColor: 'white',
        padding:3,
        margin:5, 
        height:150 , 
        width:400,
        left:10
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
        fontWeight: 'bold' ,
        fontSize: 11,
        color:'black'
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
    },

    categories:{
        borderRadius:2,
        height:360,
    },
    itemtext:{
        fontWeight:'bold',
        fontSize:18 ,
        top:34
    } ,
    buttonViewStyle:{
        flexDirection:'row',
        backgroundColor:'green',
        borderRadius:8,
        margin:4
    } , 
    addbutton : {
        backgroundColor: "orange",
        height: 30,
        width: 90,
        margin: 15,
        borderRadius: 10 , 
        left:8
    },
    footerCategores:{
        top:12,
        left:12
    },
    radiobuttonview:{
        flexDirection:'row'
    } ,
    radioText:{
        textAlign:'center',
        top:6
    },
    radionButtongroup:{
        left:43,
        top:9,
        flexDirection:'row'
    } ,
    buttonView:{
        backgroundColor:"white",
        height:90 ,
        top:90
    }
})

export default styles;