import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    main : {
        flex : 1,
        padding: 2,
        width: "100%",
        backgroundColor:'#fff'
    },
    header:{
        textAlign: "center",
        fontSize: 50,
        fontWeight: "bold",
        letterSpacing: 1.5,
        marginTop: 30,
        color: '#ffa31a'
    },
    formContainer:{
        marginTop: 20,
        padding: 8,
    },
    inputWrapper:{
        backgroundColor:"#f5f5f0",
        flexWrap:"wrap",
        flexDirection:"row",
        alignItems: 'center',
        alignSelf: 'center',
        borderWidth: 2,
        borderRadius: 2,
        padding: 2,
        marginTop: 18,
        width: "95%",
    },
    icon:{
        height: 24,
        width: 28,
        paddingLeft: 5,
        color:'#ffa31a'
    },  
    input:{
        width: "90%",
        fontSize: 18,
        padding: 10
    },
    button:{
        marginTop: 60,
        padding: 8,
        width: "100%",
        borderRadius: 5,
        alignSelf:"center",
        backgroundColor:"#ffa31a",
        borderColor:'#663d00'
    },
    buttonText:{
        fontSize: 20,
        textAlign:"center",
        letterSpacing: 1.5,
        color:'#000'
    }
})

export default styles;