import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    common:{
        backgroundColor:"white"
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
        backgroundColor: "orange",
        height: 40,
        width: 250,
        padding: 10,
        margin: 24,
        borderRadius: 10,
        left:130
    },
    buttonText:{
        textAlign: "center",
        fontSize: 15,
        letterSpacing: 1,
        fontWeight: 'bold'
        // fontFamily: "Poppins-Regular"
    },
    slot:{
        left:80 , 
    },
    dropdownslot:{
        backgroundColor: "#FFEA00" ,
    },
    buttonView:{
        backgroundColor:"white",
        height:90
    }
})

export default styles;