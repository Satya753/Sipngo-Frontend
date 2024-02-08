import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    main: {
        flex: 1,
        marginTop: 20,
        alignSelf: "center",
        height:"100%",
        backgroundColor: "white"
    },
    imageContainer:{
        margin: 15
    },
    formContainer:{
        marginTop : 15
    },
    header:{
        textAlign: "center",
        fontSize: 35,
        letterSpacing: 4,
        fontWeight: "bold",
        color: '#ffa31a'
    },
    imageWrapper:{
    },
    image:{
        height: 150,
        width: "100%"
    },
    formWrapper:{
        width: "100%",
    },  
    form:{
        width: "90%",
        height: 220,
        borderColor: "black",
        margin: 18,
        padding : 10
    },
    inputWrapper:{
        flexDirection: "row",
        alignItems: "center",
        flexWrap:"wrap",
        marginTop: 15,
        borderBottomWidth: 2,
        borderColor:'#663d00'
    },
    credInput:{
        padding: 2,
        marginTop: 18,
        width: "90%",
        letterSpacing: 1,
        fontSize: 18
    },
    button:{
        marginTop: 28,
        padding: 8,
        width: "40%",
        alignSelf:'center',
    },
    buttonText:{
        textAlign: 'center',
        letterSpacing: 2,
        fontSize: 24,
        color:'#fff',
        fontWeight:"500"
    },
    orWrapper:{
        // height: 400,
        marginVertical: 50
    },
    orWrapperText:{
        textAlign: "center",
        letterSpacing: 1.5,
        color:"#ffa31a",
        fontWeight:"600",
        fontSize: 16
    }

})

export default styles;