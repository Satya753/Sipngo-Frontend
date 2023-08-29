import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        width : "50%",
        flex: 1,
        justifyContent: "center",
        alignItems:'center',
        padding:10
        },
    button : {
        backgroundColor: "green",
        height: 65,
        width: 200,
        padding: 10,
        margin: 10,
        borderRadius: 10
    },
    buttonText:{
        textAlign: "center",
        color: "white",
        fontSize: 28,
        letterSpacing: 1,
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
    }
})

export default styles;