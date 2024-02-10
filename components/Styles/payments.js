import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    header:{
        textAlign: 'center',
        fontSize : 25,
        fontWeight : "600",
        letterSpacing: 2,
        marginVertical : 20
    },  
    calenderWrapper:{
        margin: 10,
        borderRadius : 10
    },  
    scrollview:{
        padding:20,
        height: 200,
        margin:20,
    },
    singleitem:{
        padding:2,
        margin:2,
        textAlign:"center"
    },
    button : {
        backgroundColor: "#cc5200",
        borderRadius : 10,
        margin : 15
    },
    buttonText:{
        textAlign: "center",
        fontSize: 20,
        letterSpacing: 1,
        fontWeight: 'bold',
        padding : 10,
        color : '#fff'
    },
    buttonView:{
        flexDirection : 'row',
        justifyContent:'space-between',
        top : 10
    },
    slotContainer : {
        backgroundColor : '#fff',
        borderRadius : 10,
        marginVertical : 20,
        marginHorizontal : 10,
        padding : 10
    },
    radionButtongroup:{
        flexDirection:'row',
        alignSelf : 'center',
    },
    radiobuttonview:{
        flexDirection:'row',
        padding : 10,
        alignItems : 'center',
    } ,
    radioText:{
        textAlign:'center',
        fontSize : 18,
        letterSpacing : 2
    }
})

export default styles;