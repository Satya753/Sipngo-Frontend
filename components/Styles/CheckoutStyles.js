import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    main : {
        flex : 1,
    },
    scrollViewContainer : { 
        flex : 1,
        margin : 10,
        borderRadius : 10
    },
    header : {
        textAlign : "center",
        fontSize : 20,
        letterSpacing : 2,
        marginVertical : 10
    },
    item : {
        flexDirection : 'row',
        marginHorizontal : 25,
        marginVertical : 10,
        justifyContent : 'space-between',
        alignItems : "center",
    },
    itemName_wrapper: {

    },
    itemName:{
        fontSize : 18,
        fontWeight : '600',
        letterSpacing  : 1.5
    },
    itemCost : {
        fontWeight : '600',
        paddingTop : 4
    },  
    itemCountContainer : {

    },
    itemCountControl : {
        flexDirection : 'row',
        alignItems : 'center',
        borderWidth : 1,
        borderRadius : 10,
        borderColor : '#cc5200',
        backgroundColor: '#ffd1b3',    
    },
    itemCountControl_text : {
        marginHorizontal : 8,
        fontSize : 22,
        color : '#cc5200'
    },
    itemCount_text :{ 
        paddingHorizontal : 10,
        fontSize : 16,
        fontWeight : '600'
    },
    itemCount_amountText : {
        textAlign: "right",
        fontWeight : "600",
        paddingRight : 5,
    },
    billContainer : {

    },
    bill_body: {
        flexDirection : 'row',
        marginHorizontal : 25,
        marginVertical : 20,
        justifyContent : 'space-between'
    },
    billText : {
        fontSize : 16,
        fontWeight : '500'
    },
    billText_amount : {
        fontSize : 16,
        fontWeight : '500'
    },
    footer : {
    },
    footer_button : {
        backgroundColor : '#cc5200',
        borderRadius : 10,
        paddingVertical : 15,
        paddingHorizontal : 5,
        flexDirection : 'row',
        alignItems: 'center',
        width : '90%',
        alignSelf: 'center'
    },
    footer_buttonText : {
        textAlign : 'center',
        fontSize : 20,
        color : '#fff',
        fontWeight : '500',
        width: '70%',
        paddingHorizontal: 5
    },
    footer_totalAmount : {
        color: '#fff',
        fontSize: 18,
        fontWeight : '600'
    },
    footer_totalText : {
        color: '#fff',
        fontSize: 14
    }
});

export default styles;