import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    main : {
        flexDirection :'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor : '#cc5200',
        padding : 15,
        borderRadius : 20,
        width : '90%',
        alignSelf: 'center'
    },
    cartText_wrapper : {
        margin : 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    cartText_text :{
        color : 'white',
        fontSize : 15,
        fontWeight : '600',
        paddingHorizontal: 5
    },
    cartButton_wrapper:{
        paddingHorizontal: 5
    },
    cartButton_button : {
        padding: 10,
        flexDirection : 'row',
        alignItems: 'center'
    },
    cartButton_buttonText : {
        color : 'white',
        fontSize : 15,
        fontWeight : '600',
        paddingHorizontal: 5
    }
});

export default styles