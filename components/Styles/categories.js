import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    main:{
        backgroundColor : "white",
        flex : 1
    },
    headerWrapper:{
        width : "100%",
        padding: 20,
        marginBottom: 10,
        // backgroundColor : '#ffd1b3'
    },
    headerText:{
        alignSelf: 'center',
        fontSize : 30,
        letterSpacing : 2,    
        fontWeight: "600"
    },
    scrollViewContainer :{
        flex: 1
    },
    card:{
        width : "95%",
        marginHorizontal: 9,
        flexDirection: 'row',
        marginVertical: 30,
    },
    cardText:{
        width: '60%',
        padding:10
    },
    cardText_name:{
        letterSpacing: 1.2,
        fontWeight: '400',
        fontSize: 20
    },
    cardText_price:{
        marginTop: 10
    },
    cardImage:{
        width: '40%',
        position: 'relative'
    },
    countContainer:{
        backgroundColor: '#ffd1b3',
        borderColor: '#cc5200',
        borderWidth : 1,
        flexDirection: 'row',
        width: '70%',
        alignSelf:"center",
        position: 'absolute',
        bottom: -25,
        padding: 5,
        borderRadius: 10,
    },
    button_decrease:{
        width: '33%',
    },
    countText:{
        width: '33%',
    },
    button_increase:{
        width: '33%',
    },
    button_text:{
        textAlign:"center",
        color: '#cc5200',
        width: '100%',
        textAlign:'center',
        fontSize: 18,
        fontWeight: '600'
    }
})

export default styles;